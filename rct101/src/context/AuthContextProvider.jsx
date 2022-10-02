// import {useReducer,useState,createContext} from "react"
// import Reducer from "./Reducer";
// import { Auth,reset } from "./Action";

//     export const AuthContext=createContext();
//     const initState={
//       email: "",
//       isAuth: false,
//     }

// const AuthContextProvider = ({Children}) => {
// const [state,dispatch]=useReducer(Reducer,initState);
// //console.log(state)
//   return (
//     <AuthContext.Provider value={{state, dispatch}}>
//       {Children}
//     </AuthContext.Provider>
// //   )
// }

// export default AuthContextProvider

import {createContext, useReducer} from "react";
import Reducer from "./Reducer";


export const AuthContext=createContext();
const initState={
  email: "",
  isAuth: false,
}

const AuthContextProvider = ({children}) => {
  const [state,dispatch]=useReducer(Reducer,initState);
  return (
    <AuthContext.Provider value={{state , dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
