import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import Loader from './Loader'
import { Box, Image,Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const News = () => {
    const [data,setData]=useState([]);
    const[load,setLoad]=useState(false);
    const navigate=useNavigate();
    const getData=()=>{
        return axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=6215e226f88a44f5a2cc01111177a3e3")
    }
    useEffect(()=>{
        setLoad(true);
        getData().then((res)=>{setData(res)})
        setLoad(false);
    },[])
   
    if(load){
         <Loader/>
        } 
  
  return (
    <Box >
        {data?.data?.articles.map((e,i)=>(
    <Box mb="20px" 
    onClick={()=>{navigate(`/SingleNews/${i}`)}}
    style={{cursor:"pointer"}}
    >
        <Image src={e.urlToImage} alt='img' mb="10px" />
        <Text >{e.title}</Text>
    </Box>

        ))}
    </Box>
  )
}

export default News