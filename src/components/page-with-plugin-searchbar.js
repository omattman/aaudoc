import React, { Fragment } from "react"
import { rhythm } from "../utils/typography"
import { colors, mediaQueries, sizes } from "../utils/presets"

const PageWithPluginSearchBar = ({ isPluginsIndex, location, children }) => (
  <Fragment>{children}</Fragment>
)

const widthDefault = rhythm(14)
const widthLarge = rhythm(16)

const styles = {
  sidebar: {
    height: `calc(100vh - ${sizes.headerHeight})`,
    width: `100%`,
    zIndex: 1,
    top: `calc(${sizes.headerHeight} + ${sizes.bannerHeight} - 1px)`,
    [mediaQueries.md]: {
      display: `block`,
      width: widthDefault,
      position: `fixed`,
      background: colors.white,
      borderRight: `1px solid ${colors.ui.border.subtle}`,
    },
    [mediaQueries.lg]: {
      width: widthLarge,
    },
  },
  content: {
    [mediaQueries.md]: {
      display: `block`,
      paddingLeft: widthDefault,
    },
    [mediaQueries.lg]: {
      paddingLeft: widthLarge,
    },
  },
}

export default PageWithPluginSearchBar
