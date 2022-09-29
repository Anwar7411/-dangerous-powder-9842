import React from 'react'
import styles from "./Navbar.module.css"
import { Search2Icon} from '@chakra-ui/icons'
import { Link,useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className={styles.navbar}>
        <div >
            <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="logo" onClick={()=>navigate("/")}/>
        </div>
        <div>
        <Search2Icon w={10} h={6} />
        </div>
    </div>
  )
}

export default Navbar