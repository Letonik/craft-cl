import {Element, useNode} from "@craftjs/core";
import {Container} from "../Container";
import React from "react";

export const BlockOne = () => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <Element
      canvas
      ref={connect}
      is={Container}
      background={{ r: 78, g: 78, b: 78, a: 1 }}
      color={{ r: 0, g: 0, b: 0, a: 1 }}
      height="300px"
      width="300px"
    ></Element>
  );
};
