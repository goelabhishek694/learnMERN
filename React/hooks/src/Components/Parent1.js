import React, { useContext } from "react";
import Child from '../Child'
import context from "./Context";

function Parent1() {
    const {theme} = useContext(context);
    return (
        <div className={theme ? "dark" : "light"}>
          Parent1
            <Child theme={theme} />
        </div>
     
    );
}

export default Parent1