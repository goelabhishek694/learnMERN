import React, { useState } from "react";
import { connect } from "react-redux";
function Ball({balls,buyBall,sellBall}) {
//   console.log(props);
  const [qty, setQty] = useState(1);
  return (
    <div>
      <h1>Balls:{balls}</h1>
      <input type="number" value={qty} onChange={(e)=>setQty(e.target.value) } />
      <button onClick={()=>buyBall(qty)}>Buy Ball </button>
      <button onClick={sellBall}>Sell Ball </button>
    </div>
  );
}
//component ko global store se laake deta as props , isko ek state milta h connect method se ,
const mapStateToProps = (state) => {
  return {
    balls: state.ball.balls,
  };
};

// ye function ek action dispatch krta h , yaani reducer ke paas jaayega aur switch case chalaayega

const mapDispatchToProps = (dispatch) => {
  return {
    buyBall: (qty) => dispatch({ type: "BUY_BALL", payload:qty }),
    sellBall: () => dispatch({ type: "SELL_BALL" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ball);
