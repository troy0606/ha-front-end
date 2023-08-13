import React, { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import FP_MD from "@md_path/fp.md";

const Practice1 = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(FP_MD)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <React.Fragment>
      <h1 className="text-xl">Functional Programming</h1>
      <ReactMarkdown
        className={'reactMarkDown'}
        children={markdown}
        remarkPlugins={[remarkGfm]}
        skipHtml={false}
      />
    </React.Fragment>
  );
};

export default Practice1;
