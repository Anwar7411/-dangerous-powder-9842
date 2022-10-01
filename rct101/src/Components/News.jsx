import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import Loader from './Loader'
import { Box, Image,Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const News = () => {
    const [data,setData]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    const navigate=useNavigate();
    const getData=()=>{
        return axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=6215e226f88a44f5a2cc01111177a3e3")
    }
    useEffect(()=>{
        setIsLoading(true);
        getData().then((res)=>{setData(res)}).finally(()=>(setIsLoading(false)));
    },[])
   
    if(isLoading){
        return <Loader />
        } 
  
  return (
    <Box >
        {data?.data?.articles.map((e,i)=>(
    <Box mb="20px" 
    onClick={()=>{navigate(`/SingleNews/${i}`)}}
    style={{cursor:"pointer"}}
    boxShadow='dark-lg'
    >
        <Image src={e.urlToImage} alt='img' mb="10px" />
        <Text >{e.title}</Text>
    </Box>

        ))}
    </Box>
  )
}

export default News