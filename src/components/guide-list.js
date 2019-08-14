import React from "react"

import softwareHierarchy from "../data/software-links.yaml"
import tutorialHierarchy from "../data/tutorial-links.yaml"
import contributingHierarchy from "../data/contributing-links.yaml"

// Search through tree, which may be 2, 3 or more levels deep
const childItemsBySlug = (
  softwareHierarchy,
  tutorialHierarchy,
  contributingHierarchy,
  slug
) => {
  let result

  const iter = a => {
    if (a.link === slug) {
      result = a
      return true
    }
    return Array.isArray(a.items) && a.items.some(iter)
  }

  softwareHierarchy.some(iter)
  tutorialHierarchy.some(iter)
  contributingHierarchy.some(iter)
  return result && result.items
}

const GuideList = ({ slug }) => {
  const subitemsForPage =
    childItemsBySlug(softwareHierarchy, tutorialHierarchy, slug) || []

  const subitemList = subitemsForPage.map((subitem, i) => (
    <li key={i}>
      <a href={subitem.link}>{subitem.title}</a>
    </li>
  ))
  const toc = subitemList.length ? (
    <>
      <h2>Index</h2>
      <ul>{subitemList}</ul>
    </>
  ) : null
  return toc
}

export default GuideList
