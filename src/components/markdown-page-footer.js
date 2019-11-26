/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql } from "gatsby";
import EditIcon from "react-icons/lib/md/create";

export default function MarkDownPageFooter({ page }) {
  return (
    <React.Fragment>
      <hr sx={{ display: `none` }} />
      {page && (
        <a
          sx={{ variant: `links.muted`, mt: 9 }}
          href={`https://github.com/omattman/aaudoc/blob/master/${`docs`}/${
            page ? page.parent.relativePath : ``
          }`}
        >
          <EditIcon sx={{ marginRight: 2 }} />
          {` `}
          Edit this page on GitHub
        </a>
      )}
    </React.Fragment>
  );
}

export const fragment = graphql`
  fragment MarkdownPageFooterMdx on Mdx {
    parent {
      ... on File {
        relativePath
      }
    }
  }
  fragment MarkdownPageFooter on MarkdownRemark {
    parent {
      ... on File {
        relativePath
      }
    }
  }
`;
