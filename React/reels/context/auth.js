import React from 'react'
import { auth} from "../firebase";
export const AuthContext = React.createContext();
import { signInWithEmailAndPassword } from "firebase/auth";
function AuthWrapper({children}) {
    console.log("in auth wrapper ");
    //feature created 
    function login(email,password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const store = {
        login
    }


    return (
      <AuthContext.Provider value={store}>
        {children}
      </AuthContext.Provider>
    );
}

export default AuthWrapper;