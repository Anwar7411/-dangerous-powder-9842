import React from 'react'
import {Routes ,Route} from "react-router-dom"
import Entertainment from './Entertainment'
import Education from './Education'
import Home from './Home'
import LatestNews from './Latest News'
import LifeStyle from './LifeStyle'
import PageNotFound from './PageNotFound'
import Photos from './Photos'
import ViralNews from './ViralNews'
import Sports from './Sports'
import World from './World'
import SingleNews from './SingleNews'
import Login from './Login'
import Private from './Private'
const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Private><Home /></Private>}></Route>
        <Route path="/Entertainment" element={<Private><Entertainment /></Private>}>Entertainment</Route>
        <Route path="/Education" element={<Private><Education /></Private>}></Route>
        <Route path="/LatestNews" element={<Private><LatestNews /></Private>}></Route>
        <Route path="/LifeStyle" element={<Private><LifeStyle /></Private>}></Route>
        <Route path="/Photos" element={<Private><Photos /></Private>}></Route>
        <Route path="/ViralNews" element={<Private><ViralNews /></Private>}></Route>
        <Route path="/Sports" element={<Private><Sports /></Private>}></Route>
        <Route path="/World" element={<Private><World /></Private>}></Route>
        <Route path="/SingleNews/:id" element={<Private><SingleNews /></Private>}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/Login" element={<Login />}></Route>
    </Routes>
  )
}

export default Allroutes