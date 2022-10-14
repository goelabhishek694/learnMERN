import smartphone from './smartphone.jpg'
import book from "./book.jpg";
import speaker from "./speaker.jpg";
import * as actionTypes from './action'
const initialState = {
  products: [
    {
      id: 1,
      title: "Smartphone",
      description: `This smartphone is not just a sight to behold but also comes equipped with innovative features
         that will keep you productive and entertained. Its Helio G85 Gaming Processor ensures that you stay
          on top of the leaderboard while gaming. Its 16.5 cm (6.5) Mini-drop Fullscreen ensures an immersive
           experience while gaming, streaming content, and more. `,
      price: 20000,
      image: smartphone,
    },
    {
      id: 2,
      title: "Bluetooth Speaker",
      description: `With the Bluetooth speaker, you can enjoy motivational, dance, or instrumental music whenever you want. 
        It ensures an immersive listening experience with its 52 mm full-range driver so that you can stay entertained
         wherever you are. With an IPX7 rating, it ensures water resistance so that you can listen to music by
          the poolside without a worry in the world.`,
      price: 999.0,
      image: speaker,
    },
    {
      id: 3,
      title: "Book",
      description: `The land of Meluha is an empire created by Lord Rama, and it is ruled by the Suryavanshis. This empire 
        is powerful and proud, however, the Saraswati river that is their source of water is slowing drying up. 
        On top of that, the empire is at war with the Chandravanshis who have allied with The Nagas, a group of 
        sinister and deformed human beings who have extraordinary martial art skills.`,
      price: 250.0,
      image: book,
    },
  ], //all the products in my ecommerce
  currentItem: null, //item that will be viewed on singlepage
  cart: [], //items added into cart
};
// action.payload.id=2
const shopReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((product) => product.id == action.payload.id)
      const inCart = state.cart.find((product) => product.id == action.payload.id ? true : false)
      return {
        ...state,
        cart: inCart ?
          state.cart.map((product) => product.id == action.payload.id ? { ...product, qty: product.qty + 1 } : product)
          :
          [...state.cart,{...item,qty:1}] //[{speaker,q:2},{phone,qt:2}]
      }
      
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
          ...state,
          currentItem:action.payload.item
      }
    default: return state
  }
  // return state;
};

export default shopReducer

