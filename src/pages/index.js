/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Container from "../components/container";
import FooterLinks from "../components/shared/footer-links";

class IndexRoute extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet>
          <meta name="Description" content="meta desc" />
        </Helmet>
        <main
          id={`reach-skip-nav`}
          css={{
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
            justifyContent: `space-between`
          }}
        >
          <div css={{ flex: `1 1 100%` }}>
            <Container withSidebar={false}>
              <section>
                <h1>Welcome</h1>
                <ol>
                  <li>
                    links
                    <ul>
                      <li>
                        <Link to="/software/">Software</Link>
                      </li>
                      <li>
                        <Link to="/tutorial/">Tutorials</Link>
                      </li>
                      <li>
                        <Link to="/contributing/">Contributing</Link>
                      </li>
                    </ul>
                  </li>
                </ol>
              </section>
            </Container>
          </div>
        </main>
        <FooterLinks />
      </Layout>
    );
  }
}

export default IndexRoute;
