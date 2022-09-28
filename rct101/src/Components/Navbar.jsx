import React from 'react'
import styles from "./Navbar.module.css"
import { Search2Icon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
const Navbar = () => {
  
  return (
    <div className={styles.navbar}>
        <div >
           <Link to="/"> <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="logo" /></Link>
        </div>
        <div>
        <Search2Icon w={20} h={40} />
        </div>
    </div>
  )
}

export default Navbar