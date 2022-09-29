import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import Loader from './Loader'
import { Box, Image,Text } from '@chakra-ui/react'
const News = () => {
    const [data,setData]=useState([]);
    const[load,setLoad]=useState(false);
    const getData=()=>{
        return axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=6215e226f88a44f5a2cc01111177a3e3")
    }
    useEffect(()=>{
        setLoad(true);
        getData().then((res)=>{setData(res)})
        setLoad(false)
    },[])
   
       if(load){
        <Loader/>
       } 
    
  return (
    <Box >
        {data?.data?.articles.map((e)=>(
    <Box  mt="20px">
        <Image src={e.urlToImage} alt='img' />
        <Text mt="5px">{e.title}</Text>
    </Box>

        ))}
    </Box>
  )
}

export default News