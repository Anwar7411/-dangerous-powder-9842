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
const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Entertainment" element={<Entertainment />}>Entertainment</Route>
        <Route path="/Education" element={<Education />}></Route>
        <Route path="/LatestNews" element={<LatestNews />}></Route>
        <Route path="/LifeStyle" element={<LifeStyle />}></Route>
        <Route path="/Photos" element={<Photos />}></Route>
        <Route path="/ViralNews" element={<ViralNews />}></Route>
        <Route path="/Sports" element={<Sports />}></Route>
        <Route path="/World" element={<World />}></Route>
        <Route path="/SingleNews/:id" element={<SingleNews />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  )
}

export default Allroutes