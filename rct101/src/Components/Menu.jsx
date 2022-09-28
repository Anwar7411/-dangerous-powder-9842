import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Menu.module.css"
const Links=[
    {path:"/LatestNews",title:"Latest News"},
    {path:"/Photos",title:"Photos"},
    {path:"/Entertainment",title:"Entertainment"},
    {path:"/Sports",title:"Sports"},
    {path:"/ViralNews",title:"Viral News"},
    {path:"/LifeStyle",title:"Life Style"},
    {path:"/Education",title:"Education"},
    {path:"/World",title:"World"},
]
const Menu = () => {
  return (
    <div className={styles.menu}>
        {Links.map((e)=>(
            <div>
                 <Link style={{textDecoration:"none",color:"black"}} key={e.title} to={e.path} >{e.title}</Link>
                 <br />
            </div>
        ))}
    </div>
  )
}

export default Menu