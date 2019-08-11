import React from "react";
import styled from "react-emotion";
import { MDXProvider } from "@mdx-js/react";
import ThemeProvider from "./themeProvider";
import mdxComponents from "./mdxComponents";
import Sidebar from "./sidebar";
import RightSidebar from "./rightSidebar";
import "../styles/style.scss";
require(`katex/dist/katex.min.css`);

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled("main")`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin: 8.4rem 10rem 0;

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    margin-top: 3rem;
  }
`;

const MaxWidth = styled("div")`
  max-width: 750px;
  width: 100%;

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;
const LeftSideBarWidth = styled("div")`
  width: 298px;
`;
const RightSideBarWidth = styled("div")`
  width: 224px;
`;
const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <LeftSideBarWidth className={"hidden-xs"}>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        <Content>
          <MaxWidth>{children}</MaxWidth>
          <RightSideBarWidth className={"hidden-xs"}>
            <RightSidebar location={location} />
          </RightSideBarWidth>
        </Content>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
