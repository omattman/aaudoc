const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://ad1-aau.netlify.com/",
    gaTrackingId: null
  },
  header: {
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/AAU_logo_2012.png",
    logoLink: "/",
    title: "AAU / AD1",
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
    title: "AAU AD1 Problem Solutions",
    description: "Documentation built with GatsbyJS + MDX + GraphQL",
    ogImage: null,
    docsLocation: "https://github.com/omattman/aau-ad1-docs/blob/master/docs",
    favicon: "https://upload.wikimedia.org/wikipedia/en/b/b9/AAU_logo_2012.png"
  }
};

module.exports = config;
