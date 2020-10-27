import React from "react";

import Contributor from "./Contributor";

const Contributors = (props) => {
  return props.contributors.map((contributor) => (
    <Contributor data={contributor} key={contributor.id}></Contributor>
  ));
};

export default Contributors;
