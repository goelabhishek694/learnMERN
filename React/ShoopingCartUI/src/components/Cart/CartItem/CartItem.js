import React,{useState} from 'react'
import { connect } from "react-redux";
// import {
//   adjustItemQty,
//   removeFromCart,
// } from "../../../redux/Shopping/shopping-actions";
import './CartItem.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

function CartItem1({ item, adjustQty, removeFromCart }) {
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
      if(e.target.value>0)
      {
      setInput(e.target.value);
        adjustQty(item.id, e.target.value);
      } 
      
    };
    return (
        <>
        <hr/>
        <div className='itemContainer'>
            <div className='imgc'>
            <img src={item.image} alt={item.title}/>
            </div>
            <div className='desc'>
                <div className='itemName'>
            <h3 >{item.title}</h3>
            </div>
            <div className='itemQuantity'>
            <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
            </div>
            <div className='itemdesc'>
            <p style={{    color:'#222f3e', fontFamily: 'cursive', textAlign: 'justify'}} >{item.description}</p>
            </div>
            <div className='pc'>
            <Button variant="contained" color="secondary"
          onClick={() => removeFromCart(item.id)}
        >
          <DeleteIcon/>Delete
        </Button>
            <h3 style={{marginTop: '1%', marginLeft: '4%'}}>₹ {item.price}</h3>
            </div>
            </div>
        </div>
        </>
    )
}

export default CartItem1;