import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/rootReducer';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVrMsUlKLoyn1U9UP1q4R9piPvMUsnkMc",
  authDomain: "resumebuilder-fjp5.firebaseapp.com",
  projectId: "resumebuilder-fjp5",
  storageBucket: "resumebuilder-fjp5.appspot.com",
  messagingSenderId: "471582927327",
  appId: "1:471582927327:web:d317c1f7cc6b1969bafc6a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase , getFirestore })),reduxFirestore(firebase))
);


ReactDOM.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);