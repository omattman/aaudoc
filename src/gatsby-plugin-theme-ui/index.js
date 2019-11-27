import hex2rgba from "hex2rgba";

import {
  breakpoints as bp,
  colors as c,
  fonts as f,
  fontWeights as fw,
  fontSizes as fs,
  letterSpacings as ls,
  lineHeights as lh,
  mediaQueries as mq,
  shadows as sh,
  radii as r,
  sizes as s,
  space as sp,
  transition as t,
  zIndices as z
} from "./styles";

const breakpointsTokens = [];
for (const b in bp) {
  breakpointsTokens.push(bp[b]);
}

const fontsTokens = {};
for (const fontFamily in f) {
  fontsTokens[fontFamily] = f[fontFamily].join(`, `);
}

fontsTokens.body = fontsTokens.system;
fontsTokens.heading = fontsTokens.header;

const fontSizesTokens = fs.map(token => `${token / 16}rem`);
let spaceTokens = sp.map(token => `${token / 16}rem`);

const darkBackground = `#131217`; // meh
const darkBorder = c.grey[90];
const shadowDarkBase = `19,18,23`;
const shadowDarkFlares = `0,0,0`;

const lineHeightsTokens = {
  ...lh,

  body: lh.default,
  heading: lh.dense
};

const fweights = {
  ...fw,

  body: fw[0],
  bold: fw[1],
  medium: fw[2],
  heading: fw[1],
  headingPrimary: fw[2]
};

const col = {
  ...c,
  ...sh,

  text: c.grey[80],
  // Body background color
  background: c.white,
  // Primary brand color for links, buttons, etc.
  primary: c.gatsby,
  // A secondary brand color for alternative styling
  secondary: c.purple[40],
  // A contrast color for emphasizing UI
  accent: c.orange[60],
  // A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
  muted: c.grey[5],
  // end Theme-UI required keys
  // gatsby-design-tokens has the following in colors.text,
  // which conflicts with theme-ui's default color `text`
  // making text.header and text.secondary available as
  // `heading` and `textMuted` resolves that
  heading: c.black, // text.header
  textMuted: c.grey[50], // text.secondary
  // moved `text.placeholder` to `input.placeholder`
  // ref. e.g. https://github.com/system-ui/theme-ui/blob/702c43e804046a94389e7a12a8bba4c4f436b14e/packages/presets/src/tailwind.js#L6
  // transparent: `transparent`,
  // expand `gatsby-design-tokens` defaults
  code: {
    ...c.code,
    background: "#fdfaf6",
    backgroundInline: "#fbf2e9",
    selector: "#b94185",
    keyword: "#096fb3",
    comment: "#527713",
    tag: "#137886",
    regex: "#dc0437",
    remove: c.red[70],
    add: c.green[80],
    border: "#faede5",
    text: "#866c5b",
    punctuation: "#53450e",
    cssString: "#a2466c",
    invisibles: "#e0d7d1",
    copyButton: c.grey[60],
    lineHighlightBackground: "#fbf0ea",
    scrollbarTrack: "#faede5"
  },
  ui: {
    background: c.grey[5],
    hover: c.purple[5],
    border: c.grey[20],
    quote: "#ffe564"
  },
  note: {
    border: "#ffe564",
    background: hex2rgba("#ffe564", 0.3)
  },
  link: {
    color: c.purple[90],
    border: c.purple[30],
    hoverBorder: c.purple[50],
    hoverColor: c.purple[60]
  },
  icon: {
    dark: c.purple[60],
    neutral: c.grey[50],
    neutralLight: c.grey[30],
    background: c.white,
    accent: c.yellow[60],
    light: c.purple[10],
    lightActive: c.purple[20]
  },
  input: {
    background: c.white,
    backgroundFocus: c.white,
    border: c.grey[30],
    focusBorder: c.white,
    focusBoxShadow: c.purple[60],
    icon: c.grey[50],
    iconFocus: c.grey[60],
    placeholder: c.grey[40]
  },
  card: {
    background: c.white,
    color: c.grey[50],
    header: c.black
  },
  modal: {
    background: c.white,
    overlayBackground: hex2rgba(c.white, 0.95)
  },
  navigation: {
    background: hex2rgba(c.white, 0.985),
    linkDefault: c.grey[70],
    linkActive: c.purple[90],
    linkHover: c.purple[90],
    socialLink: c.black,
    boxShadow: sh.raised
  },
  sidebar: {
    itemHoverBackground: hex2rgba(c.grey[30], 0.35),
    itemBackgroundActive: `transparent`,
    itemBorderColor: `transparent`, // `rgba(0,0,0,0.05)`,
    activeSectionBackground: hex2rgba(c.grey[10], 0.35),
    itemBorderActive: c.purple[10]
  },
  themedInput: {
    background: c.grey[10],
    backgroundFocus: c.white,
    focusBorder: c.purple[60],
    focusBoxShadow: c.purple[30],
    icon: c.grey[50],
    iconFocus: c.grey[60],
    placeholder: c.grey[60]
  },
  highlightedBox: {
    background: c.yellow[10],
    color: c.grey[80]
  },
  button: {
    primaryBg: c.purple[60],
    primaryText: c.white,
    primaryBorder: c.purple[60],
    secondaryBg: `transparent`,
    secondaryText: c.purple[50],
    secondaryBorder: c.purple[40]
  },
  pullquote: {
    color: c.purple[60],
    borderColor: c.purple[20]
  },
  modes: {
    dark: {
      background: darkBackground,
      text: c.grey[30],
      heading: c.whiteFade[80],
      textMuted: c.grey[40],
      muted: c.grey[90],
      icon: {
        dark: c.purple[50],
        neutral: c.grey[70],
        neutralLight: c.grey[90],
        background: c.darkBorder,
        accent: c.yellow[50],
        light: c.grey[90],
        lightActive: c.purple[90]
      },
      card: {
        background: c.grey[90],
        color: c.whiteFade[70],
        header: c.white,
        starterLabelBackground: hex2rgba(c.teal[90], 0.125),
        starterLabelText: c.teal[10],
        pluginLabelBackground: hex2rgba(c.orange[90], 0.125),
        pluginLabelText: c.orange[10]
      },
      modal: {
        background: darkBackground,
        overlayBackground: hex2rgba(darkBackground, 0.95)
      },
      code: {
        // ui
        background: `#1b191f`,
        backgroundInline: darkBorder,
        border: c.grey[90],
        lineHighlightBackground: hex2rgba(c.purple[90], 0.25),
        lineHighlightBorder: c.purple[90],
        scrollbarThumb: c.grey[70],
        scrollbarTrack: c.grey[90],
        copyButton: c.grey[40],
        add: c.green[50],
        comment: c.grey[30],
        cssString: c.orange[50],
        invisibles: `#e0d7d1`,
        keyword: c.magenta[30],
        punctuation: c.whiteFade[70],
        regex: `#d88489`,
        remove: c.red[40],
        selector: c.orange[30],
        tag: c.teal[60],
        text: c.grey[30]
      },
      link: {
        border: c.purple[90],
        color: c.purple[40],
        hoverBorder: c.purple[70],
        hoverColor: c.purple[30]
      },
      navigation: {
        background: hex2rgba(darkBackground, 0.975),
        linkActive: c.purple[40],
        linkDefault: c.whiteFade[60],
        linkHover: c.white,
        socialLink: c.grey[60]
      },
      themedInput: {
        background: darkBorder,
        backgroundFocus: `black`,
        focusBorder: c.purple[60],
        focusBoxShadow: c.purple[60],
        icon: c.grey[50],
        iconFocus: c.purple[50],
        placeholder: c.whiteFade[50]
      },
      shadows: {
        dialog: `0px 4px 16px rgba(${shadowDarkBase}, 0.08), 0px 8px 24px rgba(${shadowDarkFlares}, 0.16)`,
        floating: `0px 2px 4px rgba(${shadowDarkBase}, 0.08), 0px 4px 8px rgba(${shadowDarkFlares}, 0.16)`,
        overlay: `0px 4px 8px rgba(${shadowDarkBase}, 0.08), 0px 8px 16px rgba(${shadowDarkFlares}, 0.16)`,
        raised: `0px 1px 2px rgba(${shadowDarkBase}, 0.08), 0px 2px 4px rgba(${shadowDarkFlares}, 0.08)`
      },
      sidebar: {
        itemBackgroundActive: `transparent`,
        activeSectionBackground: hex2rgba(c.purple[90], 0.1),
        itemBorderActive: c.purple[80],
        itemBorderColor: `transparent`,
        itemHoverBackground: hex2rgba(c.purple[90], 0.2)
      },
      ui: {
        background: darkBackground,
        hover: c.purple[90],
        border: darkBorder
      },
      widget: {
        background: darkBackground,
        border: darkBorder,
        color: c.white
      },
      highlightedBox: {
        background: c.grey[90],
        color: c.white
      },
      newsletter: {
        background: darkBackground,
        border: darkBorder,
        heading: c.white,
        stripeColorA: c.red[90],
        stripeColorB: c.blue[90]
      },
      search: {
        suggestionHighlightBackground: c.gatsby,
        suggestionHighlightColor: c.purple[20]
      },
      button: {
        secondaryBg: `transparent`,
        secondaryText: c.purple[40],
        secondaryBorder: c.purple[40]
      },
      pullquote: {
        color: c.purple[10],
        borderColor: c.purple[90]
      }
    }
  }
};

const si = {
  ...s,
  headerHeight: `4rem`,
  logo: spaceTokens[6],
  pluginsSidebarWidthDefault: `21rem`,
  pluginsSidebarWidthLarge: `24rem`,
  showcaseSidebarMaxWidth: `15rem`,
  sidebarItemMinHeight: spaceTokens[8],
  mainContentWidth: {
    default: `54rem`,
    withSidebar: `42rem`
  },
  sidebarWidth: {
    default: `16.5rem`,
    large: `18rem`,
    mobile: `320px`
  },
  tocWidth: `18rem`
};

// export const borders = b
export const breakpoints = breakpointsTokens;
export const colors = col;
export const fonts = fontsTokens;
export const fontSizes = fontSizesTokens;
export const fontWeights = fweights;
export const letterSpacings = ls;
export const lineHeights = lineHeightsTokens;
export const mediaQueries = mq;
export const radii = r;
export const shadows = sh;
export const sizes = si;
export const space = spaceTokens;
export const transition = t;
export const zIndices = z;

const config = {
  // this enables the color modes feature
  // and is used as the name for the top-level colors object
  initialColorModeName: `light`,
  // `prefers-color-scheme: dark` media query
  useColorSchemeMediaQuery: true,
  // borders: borders,
  breakpoints: breakpointsTokens,
  colors: col,
  fonts: fontsTokens,
  fontSizes: fontSizesTokens,
  fontWeights: fweights,
  letterSpacings: ls,
  lineHeights: lineHeightsTokens,
  mediaQueries: mq,
  radii: r,
  shadows: sh,
  sizes: si,
  space: spaceTokens,
  transition: t,
  zIndices: z,
  buttons: {
    large: {
      fontSize: 4,
      px: 4,
      height: `52px`
    },
    small: {
      fontSize: 2,
      py: 2,
      px: 3
    }
  },
  links: {
    muted: {
      fontSize: 1,
      lineHeight: `solid`,
      py: 3,
      "&&": {
        border: 0,
        color: `textMuted`,
        display: `flex`,
        fontWeight: `body`
      },
      "&&:hover": {
        color: `link.hoverColor`
      }
    }
  }
};

export default config;
