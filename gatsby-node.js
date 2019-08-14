const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require("path")
const fs = require(`fs-extra`)
const slash = require(`slash`)
const yaml = require(`js-yaml`)
const softwareLinksData = yaml.load(
  fs.readFileSync(`./src/data/software-links.yaml`)
)
const tutorialLinksData = yaml.load(
  fs.readFileSync(`./src/data/tutorial-links.yaml`)
)

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        const docsTemplate = path.resolve(
          `src/templates/template-docs-markdown.js`
        )

        // Create docs pages.
        const docPages = result.data.allMdx.edges
        const softwareLinks = softwareLinksData[0].items
        const tutorialLinks = tutorialLinksData[0].items

        // flatten sidebar links trees for easier next/prev link calculation
        function flattenList(itemList) {
          return itemList.reduce((reducer, { items, ...rest }) => {
            reducer.push(rest)
            if (items) reducer.push(...flattenList(items))
            return reducer
          }, [])
        }

        const flattenedSoftwareDocs = flattenList(softwareLinks)
        const flattenedTutorialDocs = flattenList(tutorialLinks)

        // with flattened tree object finding next and prev is just getting the next index
        function getSibling(index, list, direction) {
          if (direction === `next`) {
            const next = index === list.length - 1 ? null : list[index + 1]
            // for tutorial links that use subheadings on the same page skip the link and try the next item
            if (next && next.link && next.link.includes(`#`)) {
              return getSibling(index + 1, list, `next`)
            }
            return next
          } else if (direction === `prev`) {
            const prev = index === 0 ? null : list[index - 1]
            if (prev && prev.link && prev.link.includes(`#`)) {
              return getSibling(index - 1, list, `prev`)
            }
            return prev
          } else {
            reporter.warn(
              `Did not provide direction to sibling function for building next and prev links`
            )
            return null
          }
        }

        function findDoc(doc) {
          if (!doc.link) return null
          return (
            doc.link === this.link ||
            doc.link === this.link.substring(0, this.link.length - 1)
          )
        }

        docPages.forEach(({ node }) => {
          const slug = _.get(node, `fields.slug`)
          if (!slug) return

          const softwareIndex = flattenedSoftwareDocs.findIndex(findDoc, {
            link: slug,
          })
          const tutorialIndex = flattenedTutorialDocs.findIndex(findDoc, {
            link: slug,
          })

          // add values to page context for next and prev page
          let nextAndPrev = {}
          if (softwareIndex > -1) {
            nextAndPrev.prev = getSibling(
              softwareIndex,
              flattenedSoftwareDocs,
              `prev`
            )
            nextAndPrev.next = getSibling(
              softwareIndex,
              flattenedSoftwareDocs,
              `next`
            )
          }
          if (tutorialIndex > -1) {
            nextAndPrev.prev = getSibling(
              tutorialIndex,
              flattenedTutorialDocs,
              `prev`
            )
            nextAndPrev.next = getSibling(
              tutorialIndex,
              flattenedTutorialDocs,
              `next`
            )
          }

          createPage({
            path: `${node.fields.slug}`, // required
            component: slash(docsTemplate),
            context: {
              slug: node.fields.slug,
              ...nextAndPrev,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug

  if (
    [`MarkdownRemark`, `Mdx`].includes(node.internal.type) &&
    getNode(node.parent).internal.type === `File`
  ) {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)

    // Add slugs for docs pages
    if (fileNode.sourceInstanceName === `docs`) {
      if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
      } else if (parsedFilePath.dir === ``) {
        slug = `/${parsedFilePath.name}/`
      } else {
        slug = `/${parsedFilePath.dir}/`
      }
    }
  }

  if (slug) {
    createNodeField({ node, name: `slug`, value: slug })
  }
}
