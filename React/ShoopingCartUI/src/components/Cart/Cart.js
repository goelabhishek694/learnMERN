import React,{useState,useEffect} from 'react'
import './Cart.css';
import { connect } from "react-redux";
import CartItem from './CartItem/CartItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {coupons} from '../../constants/coupons';
import speaker from '../Products/speaker.jpg'

function Cart1({cart=[]}) {
    cart =[{
      id: 2,
      title: "Bluetooth Speaker",
      description:
          `With the Bluetooth speaker, you can enjoy motivational, dance, or instrumental music whenever you want. 
        It ensures an immersive listening experience with its 52 mm full-range driver so that you can stay entertained
         wherever you are. With an IPX7 rating, it ensures water resistance so that you can listen to music by
          the poolside without a worry in the world.`,
      price: 999.0,
      image:speaker,
    }]  
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [coupon,setCoupon] =useState('');
    const [loading,setLoading] =useState(true);
    const [success,setSuccess]=useState(null);
    const [oldPrice,setoldPrice] =useState(null);
    const getText=(e)=>{
      setCoupon(e.target.value)
    }
    const ApplyCoupon = ()=>
    { 
      console.log(coupon);

      let couponm = coupon.trim().toUpperCase();
      let obj = coupons[couponm];
      if(obj==undefined)
      {
        console.log('Coupon is not applicable')
        setSuccess(false);
        setLoading(false);
      }
      else
      {
        setSuccess(true);
        setLoading(false);
        console.log(obj.discount);
        let discount = (totalPrice/100)*(obj.discount);
        let newPrice = Math.trunc(totalPrice-discount);
        setoldPrice(totalPrice);
        setTotalPrice(newPrice);
      }
    }
    const revert = ()=>{
      setTotalPrice(oldPrice);
      setoldPrice(null);
      setSuccess(null);
      setLoading(true);
      setCoupon('');
    }
    const tryAgain = ()=>{
      setSuccess(null);
      setLoading(true);
      setCoupon('');
    }
    useEffect(() => {
      let items = 0;
      let price = 0;
  
      cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
      });
  
      setTotalItems(items);
      setTotalPrice(price);
    }, [cart]);
  
    return (
        <>
        {cart.length==0?<><h1>Your cart is empty</h1></>:
        <div className='container-div' >
            <div className='items'>
                <div className='header'>
                    <h3 style={{paddingTop: '2%',paddingLeft: '2%',marginBottom:'3%'}}>Shopping Cart</h3>
                  
                    
                </div>
                <div className='added'>
                    
                         {cart.map((item) => (
                            <CartItem key={item.id} item={item} />
                          ))}
                    
                </div>
            </div>
            <div className='details-c'>
              <div className='details'>
            <h4 style={{textAlign:'center', paddingTop:'5%'}}>Cart Summary</h4>
        <div style={{textAlign:'center', marginBottom: '5%', marginTop:'5%'}} >
          <span>Subtotal ({totalItems} items) : </span>
          <span style={{fontWeight:'bold'}}>₹ {totalPrice}</span>
        </div>
        
          <>
          {loading==true?<div className='coupon'>
        <TextField value={coupon} style={{marginRight:'2%'}} id="standard-basic" label="Enter code" onChange={getText} />
        <Button variant="outlined" size='small' onClick={ApplyCoupon}>
          Apply
        </Button></div>
        :<>
        {
        success==true?<div className='smsg'>
          <h4>Code applied !</h4>
          
          <div className='revert'>
        <Button onClick={revert} size='small' variant="contained" color="secondary"
        >
          Revert
        </Button>
          </div>
        </div>
        :<div className='fmsg'>
          <h4>Not valid !</h4>
          <div className='revert'>
        <Button onClick={tryAgain} size='small' variant="contained" color="secondary"
        >
         Try Again
        </Button>
          </div>
        </div>
        
        }
        </>
}
        </>
        
        <div className='checkout'>
        <Button variant="contained" color="primary">
          Proceed To Buy
        </Button>
        </div>
            </div>
            </div>
        </div>
        }
        </>
    )
}

export default Cart1;