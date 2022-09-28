import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import { Box, Container } from '@mui/system'
const News = () => {
    const [data,setData]=useState([])
    const getData=()=>{
        return axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=6215e226f88a44f5a2cc01111177a3e3")
    }
    useEffect(()=>{
        getData().then((res)=>{setData(res)})
    },[])
    console.log(data?.data?.articles)
  return (
    <div>
        {data?.data?.articles.map((e)=>(
            <div>
      <img src={e.urlToImage} alt='img'/>
      <p>{e.title}</p>
      <br></br>
            </div>

        ))}
    </div>
  )
}

export default News