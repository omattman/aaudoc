const path = require(`path`)

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

const GA = {
  identifier: `G-FGXPR9N8VW`,
}

module.exports = {
  siteMetadata: {
    title: `aaudoc`,
    siteUrl: `https://ad1-aau.netlify.com`,
    description: `Shared Note-Taking platform for lecture notes and course solutions`,
    twitter: ``,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/docs/`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          "gatsby-remark-embed-video",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              backgroundColor: `#ffffff`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.5rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AAU Doc`,
        short_name: `AAU Doc`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0032FC`,
        display: `standalone`,
        icon: `src/assets/aaudoc-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GA.identifier,
        anonymize: true,
        allowLinker: true,
      },
    },
  ],
}
