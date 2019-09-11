import React from "react"
import styled from "@emotion/styled"

import { colors, space, sizes, fonts, zIndices } from "../utils/presets"

const horizontalPadding = space[6]
const backgroundColor = colors.blue[90]

const BannerContainer = styled(`aside`)`
  background-color: ${backgroundColor};
  height: ${sizes.bannerHeight};
  position: fixed;
  width: 100%;
  z-index: ${zIndices.banner};
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`

const InnerContainer = styled(`div`)`
  align-items: center;
  display: flex;
  height: ${sizes.bannerHeight};
  overflow-x: auto;
  mask-image: ${`linear-gradient(to right, transparent, ${backgroundColor} ${horizontalPadding}, ${backgroundColor} 96%, transparent)`};
`

const Content = styled(`div`)`
  color: ${colors.white};
  font-family: ${fonts.header};
  padding-left: ${horizontalPadding};
  padding-right: ${horizontalPadding};
  -webkit-font-smoothing: antialiased;
  white-space: nowrap;

  a {
    color: ${colors.white};
    border-bottom: 1px solid ${colors.white};
  }

  a:hover {
    color: ${colors.white};
    border-bottom-color: ${colors.white}a0;
  }
`

const Banner = () => (
  <BannerContainer className="banner">
    <InnerContainer>
      <Content>{`Get hyper`}</Content>
    </InnerContainer>
  </BannerContainer>
)

export default Banner
