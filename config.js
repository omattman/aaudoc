const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://learn.hasura.io",
    gaTrackingId: null
  },
  header: {
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/AAU_logo_2012.png",
    logoLink: "https://learn.hasura.io",
    title: "AAU AD1 Docs",
    githubUrl: "https://github.com/omattman/aau-ad1-docs",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }]
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/codeblock"],
    links: [{ text: "Moodle page", link: "https://www.moodle.aau.dk/my/" }],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Gatsby Gitbook Boilerplate | Hasura",
    description: "Documentation built with mdx. Powering learn.hasura.io ",
    ogImage: null,
    docsLocation:
      "https://github.com/omattman/aau-ad1-docs/blob/master/content",
    favicon: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
  }
};

module.exports = config;
