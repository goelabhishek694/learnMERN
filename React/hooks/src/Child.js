import React, { useContext } from "react";

function Child({theme}) {
  return <div className={theme?"dark":"light"}>Child</div>;
}

export default Child;
