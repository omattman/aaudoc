import React from "react"

import docHierarchy from "../../data/doc-links.yaml"
import solutionsHierarchy from "../../data/solution-links.yaml"

// Search through tree, which may be 2, 3 or more levels deep
const childItemsBySlug = (docHierarchy, solutionsHierarchy, slug) => {
  let result

  const iter = a => {
    if (a.link === slug) {
      result = a
      return true
    }
    return Array.isArray(a.items) && a.items.some(iter)
  }

  docHierarchy.some(iter)
  solutionsHierarchy.some(iter)
  return result && result.items
}

const GuideList = ({ slug }) => {
  const subitemsForPage =
    childItemsBySlug(docHierarchy, solutionsHierarchy, slug) || []

  const subitemList = subitemsForPage.map((subitem, i) => (
    <li key={i}>
      <a href={subitem.link}>{subitem.title}</a>
    </li>
  ))
  const toc = subitemList.length ? (
    <>
      <h2>Index</h2>
      <ul>{subitemList}</ul>
    </>
  ) : null
  return toc
}

export default GuideList
