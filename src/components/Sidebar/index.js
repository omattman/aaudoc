import React from "react";
import Tree from "./tree";
import { StaticQuery, graphql } from "gatsby";
import styled from "react-emotion";
import { ExternalLink } from "react-feather";
import config from "../../../config";

const forcedNavOrder = config.sidebar.forcedNavOrder;

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} />
    </li>
  );
})`
  list-style: none;
  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;
    &:before {
      border-radius: 100%;
      -webkit-transform: scale(0.1);
      -ms-transform: scale(0.1);
      transform: scale(0.1);
    }
    &:before,
    &:after {
      content: "";
      left: calc(1.5rem - 1rem);
      top: 1.3em;
      height: 8px;
      position: absolute;
      -webkit-transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      width: 8px;
    }
    &:after {
      background: #8a4baf;
      border-radius: 4px;
      opacity: 0;
      -webkit-transform: translateX(-92px);
      -ms-transform: translateX(-92px);
      transform: translateX(-92px);
      width: 0;
    }
    ${props =>
      props.active &&
      `
    color: #663399;
    border-color: rgb(230,236,241) !important;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    background-color: #fff;
  `} // external link icon
  svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

const Sidebar = styled("aside")`
  width: 100%;
  /* background-color: rgb(245, 247, 249); */
  /* border-right: 1px solid #ede7f3; */
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  padding-right: 0;

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    background-color: #372476;
    background: #372476;
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 1023px) {
    width: 100%;
    position: relative;
    height: auto;
  }
`;

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`;

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <Sidebar>
          <ul className={"sideBarUL"}>
            <Tree edges={allMdx.edges} />
            <Divider />
            {config.sidebar.links.map((link, key) => {
              if (link.link !== "" && link.text !== "") {
                return (
                  <ListItem key={key} to={link.link}>
                    {link.text}
                    <ExternalLink size={14} />
                  </ListItem>
                );
              }
            })}
          </ul>
        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
