import React, { useState } from "react";
import { connect } from 'react-redux';
function Bat(props) {
  console.log(props);
  // const [bat, setBat] = useState(20);
  return (
    <div>
      <h1>Bats:{props.batss}</h1> 
      <button onClick={props.buyBat}>Buy Bat </button>
    </div>
  );
}
//component ko global store se laake deta as props , isko ek state milta h connect method se , 
const mapStateToProps = (state) => {
  return {
    batss: state.bat.bats,
  };
};

// ye function ek action dispatch krta h , yaani reducer ke paas jaayega aur switch case chalaayega
const mapDispatchToProps = (dispatch) => {
  return {
    buyBat: () => dispatch({ type: "BUY_BAT" })
    //action object h ye  dispatch(action)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Bat);
