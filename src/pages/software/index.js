import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../../components/layout"
import { itemListSoftware } from "../../utils/sidebar/item-list"
import { space } from "../../utils/presets"
import Container from "../../components/container"
import DocSearchContent from "../../components/docsearch-content"
import Breadcrumb from "../../components/docs-breadcrumb"

class IndexRoute extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} itemList={itemListSoftware}>
        <DocSearchContent>
          <Container>
            <Helmet>
              <title>Software</title>
              <meta name="description" content="insert meta description" />
            </Helmet>
            <Breadcrumb
              itemList={itemListSoftware}
              location={this.props.location}
            />
            <h1 id="aau-software" css={{ marginTop: 0 }}>
              Software
            </h1>
          </Container>
        </DocSearchContent>
      </Layout>
    )
  }
}

export default IndexRoute
