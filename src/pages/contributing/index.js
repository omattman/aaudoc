import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../../components/layout";
import { itemListContributing } from "../../utils/sidebar/item-list";
import { space } from "../../utils/presets";
import Container from "../../components/container";
import DocSearchContent from "../../components/docsearch-content";
import PrevAndNext from "../../components/prev-and-next";

class IndexRoute extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} itemList={itemListContributing}>
        <DocSearchContent>
          <Container>
            <Helmet>
              <title>Contributing</title>
              <meta
                name="description"
                content="Learn about contributing to the biggest collection of lecture notes and improve learning"
              />
            </Helmet>
            <h1 id="contributing-aaudoc" css={{ marginTop: 0 }}>
              Contributing to aaudoc
            </h1>
            <p>
              Thanks for being interested in contributing! We're so glad you
              want to help!
            </p>
            <p>
              Below you'll find guides on the aaudoc community, code of conduct,
              and how to get started contributing:
            </p>
            <PrevAndNext
              css={{ marginTop: space[9] }}
              next={{ title: `Community`, link: `/contributing/community/` }}
            />
          </Container>
        </DocSearchContent>
      </Layout>
    );
  }
}

export default IndexRoute;
