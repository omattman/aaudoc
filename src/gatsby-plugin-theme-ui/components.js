import React from "react";

import GuideList from "../components/guide-list.js";
import CodeBlock from "../components/code-block";
import Note from "../components/note";

export default {
  GuideList,
  Note,
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>
};
