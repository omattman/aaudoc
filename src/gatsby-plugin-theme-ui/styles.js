export const space = [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72];

export const shadows = {
  raised:
    "rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px",
  floating:
    "rgba(46, 41, 51, 0.08) 0px 2px 4px, rgba(71, 63, 79, 0.16) 0px 4px 8px",
  overlay:
    "rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px",
  dialog:
    "rgba(46, 41, 51, 0.08) 0px 4px 16px, rgba(71, 63, 79, 0.16) 0px 8px 24px"
};

export const transition = {
  curve: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)"
  },
  speed: {
    default: "250ms",
    fast: "100ms",
    slow: "350ms"
  }
};

export const sizes = {
  headerHeight: "3.75rem",
  pageHeadingDesktopWidth: "3.5rem",
  sidebarUtilityHeight: "3.5rem",
  sidebarWidth: {
    default: 11,
    large: 12
  }
};

export const zIndices = {
  widget: 2,
  banner: 10,
  modal: 10,
  sidebar: 15,
  navigation: 10,
  floatingActionButton: 20,
  skipLink: 100
};

export const radii = [0, 2, 4, 8, 16, 9999, "100%"];

export const fonts = {
  system: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji"
  ],
  header: [
    "Futura PT",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji"
  ],
  monospace: [
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  serif: ["Georgia", "Times New Roman", "Times", "Serif"],
  body: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji"
  ],
  heading: [
    "Futura PT",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji"
  ]
};

export const fontSizes = [
  12,
  14,
  16,
  18,
  20,
  24,
  28,
  32,
  36,
  42,
  48,
  54,
  60,
  68,
  76,
  84,
  92
];

export const fontWeights = {
  body: 400,
  bold: 700,
  medium: 600,
  heading: 700,
  headingPrimary: 800
};

export const letterSpacings = {
  normal: "normal",
  tracked: "0.075em",
  tight: "-0.015em"
};

export const lineHeights = {
  solid: 1,
  dense: 1.25,
  default: 1.5,
  loose: 1.75
};

export const breakpoints = [
  "400px",
  "550px",
  "750px",
  "1000px",
  "1200px",
  "1600px"
];

export const mediaQueries = {
  xxs: "@media (min-width: 0)",
  xs: "@media (min-width: 400px)",
  sm: "@media (min-width: 550px)",
  md: "@media (min-width: 750px)",
  lg: "@media (min-width: 1000px)",
  xl: "@media (min-width: 1200px)",
  xxl: "@media (min-width: 1600px)"
};

export const colors = {
  purple: {
    5: "#E6D8FA",
    10: "#D9C5F8",
    20: "#CDB2F6",
    30: "#C19FF4",
    40: "#B48BF2",
    50: "#A878F0",
    60: "#9C65EE",
    70: "#8F52EC",
    80: "#833FEA",
    90: "#772CE8"
  },
  orange: {
    5: "#fffcf7",
    10: "#fff4db",
    20: "#ffedbf",
    30: "#ffe4a1",
    40: "#ffd280",
    50: "#ffb238",
    60: "#fb8400",
    70: "#f67300",
    80: "#e65800",
    90: "#db3a00"
  },
  yellow: {
    5: "#fffdf7",
    10: "#fff5bf",
    20: "#fff2a8",
    30: "#ffeb99",
    40: "#ffdf37",
    50: "#fed038",
    60: "#fec21e",
    70: "#e3a617",
    80: "#bf9141",
    90: "#8a6534"
  },
  red: {
    5: "#fffafa",
    10: "#fde7e7",
    20: "#ffbab8",
    30: "#ff8885",
    40: "#ff5a54",
    50: "#fa2915",
    60: "#ec1818",
    70: "#da0013",
    80: "#ce0009",
    90: "#b80000"
  },
  magenta: {
    5: "#fffafd",
    10: "#ffe6f6",
    20: "#f2c4e3",
    30: "#e899ce",
    40: "#d459ab",
    50: "#bc027f",
    60: "#a6026a",
    70: "#940159",
    80: "#7d0e59",
    90: "#690147"
  },
  blue: {
    5: "#f5fcff",
    10: "#dbf0ff",
    20: "#90cdf9",
    30: "#63b8f6",
    40: "#3fa9f5",
    50: "#0d96f2",
    60: "#0e8de6",
    70: "#047bd3",
    80: "#006ac1",
    90: "#004ca3"
  },
  teal: {
    5: "#f7ffff",
    10: "#dcfffd",
    20: "#ccfffc",
    30: "#a6fffa",
    40: "#73fff7",
    50: "#05f7f4",
    60: "#2de3da",
    70: "#00bdb6",
    80: "#10a39e",
    90: "#008577"
  },
  green: {
    5: "#f7fdf7",
    10: "#def5dc",
    20: "#a1da9e",
    30: "#79cd75",
    40: "#59c156",
    50: "#37b635",
    60: "#2ca72c",
    70: "#1d9520",
    80: "#088413",
    90: "#006500"
  },
  grey: {
    5: "#fbfbfb",
    10: "#EFEFF1",
    20: "#f0f0f2",
    30: "#e6e6ea",
    40: "#b7b5bd",
    50: "#78757a",
    60: "#635e69",
    70: "#48434f",
    80: "#36313d",
    90: "#232129"
  },
  gatsby: "#663399",
  white: "#ffffff",
  black: "#000000",
  whiteFade: {
    10: "rgba(255, 255, 255, 0.1)",
    30: "rgba(255, 255, 255, 0.3)",
    50: "rgba(255, 255, 255, 0.5)",
    60: "rgba(255, 255, 255, 0.6)",
    70: "rgba(255, 255, 255, 0.7)",
    80: "rgba(255, 255, 255, 0.85)"
  },
  blackFade: {
    10: "rgba(35, 33, 41, 0.1)",
    30: "rgba(35, 33, 41, 0.3)",
    50: "rgba(35, 33, 41, 0.5)",
    60: "rgba(35, 33, 41, 0.6)",
    70: "rgba(35, 33, 41, 0.7)",
    80: "rgba(35, 33, 41, 0.85)"
  },
  text: "#36313d",
  background: "#ffffff",
  primary: "#9147FF",
  secondary: "#b17acc",
  muted: "#fbfbfb"
};
