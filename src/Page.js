import React from "react";
import "./styles/Page.css";

const Page = (props) => {
  let classnames = "";
  if (props.location.pathname === "/") classnames = "page pageforward";
  else classnames = "page pagebackward";
  return <section className={classnames}>{props.children}</section>;
};

export default Page;
