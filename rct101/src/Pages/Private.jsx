
import { AuthContext } from '../context/AuthContextProvider'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'


const Private = ({children}) => {
    const {state,dispatch}=useContext(AuthContext)
  if(!state.isAuth){
    return <Navigate to="/Login" />
  }
  return children
}

export default Private