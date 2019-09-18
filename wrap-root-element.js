import React from "react"
import { MDXProvider } from "@mdx-js/react"
import GuideList from "./src/components/guide-list"
import CodeBlock from "./src/components/code-block"

const components = {
  GuideList,
  pre: CodeBlock,
}

export default ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
