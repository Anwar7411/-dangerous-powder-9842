import {useState,useContext} from 'react'
import styles from "./Navbar.module.css"
import { Search2Icon} from '@chakra-ui/icons'
import { useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider'
const Navbar = () => {
  const {state}=useContext(AuthContext)
  // const [user,setUser]=useState("")
  const navigate=useNavigate();
  let user=""
  if(state.isAuth){
    user= state.email
  }
  return (
    <div className={styles.navbar}>
        <div style={{cursor:"pointer"}}>
            <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="logo" onClick={()=>navigate("/")}/>
        </div>
        <div style={{color:"red",fontSize:"21px"}}>{user}</div>
        <div>
        <Search2Icon w={10} h={6} />
        </div>
    </div>
  )
}

export default Navbar