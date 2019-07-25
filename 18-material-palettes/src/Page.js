import React from "react";
import "./styles/Page.css";

// this syntax automatically extracts {children} from props
function Page({ children }) {
  return <div className="page">{children}</div>;
}

export default Page;
