import React, { useState } from "react";
import { connect } from "react-redux";
function Ball({balls,buyBall,sellBall}) {
//   console.log(props);
  
  return (
    <div>
      <h1>Balls:{balls}</h1>
      <button onClick={buyBall}>Buy Ball </button>
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
    buyBall: () => dispatch({ type: "BUY_BALL" }),
    sellBall: () => dispatch({ type: "SELL_BALL" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ball);
