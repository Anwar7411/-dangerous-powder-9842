import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import Loader from '../Components/Loader'
import { useNavigate,useParams } from 'react-router-dom'
import Menu from '../Components/Menu'
import { Box, Container, Grid, Image, Text } from '@chakra-ui/react'
import News from '../Components/News'

const SingleNews = () => {
    const [data,setData]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const navigate=useNavigate();
    const parm=useParams();
    const getData=()=>{
        return axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=6215e226f88a44f5a2cc01111177a3e3")
    }
    useEffect(()=>{
        setIsLoading(true)
        getData().then((res)=>{setData(res)})
        setIsLoading(false);
    },[])
   const num=Number(parm.id);
    let val= data?.data?.articles.filter((e,i)=>{
      if(i===num){
        return e;
      }     
        })

    const des=["Iran made its first official import order using cryptocurrency this week, the semi-official Tasnim agency reported on Tuesday, a move that could enable the Islamic Republic to circumvent U.S. sanctions that have crippled the economy.",
                    "The order, worth $10 million, was a first step towards allowing the country to trade through digital assets that bypass the dollar-dominated global financial system and to trade with other countries similarly limited by U.S. sanctions, such as Russia. The agency didn’t specify which cryptocurrency was used in the transaction.",
                    "By the end of September, the use of cryptocurrencies and smart contracts will be widely used in foreign trade with target countries, an official from the Ministry of Industry, Mine and Trade said on Twitter.",
                    "The United States imposes an almost total economic embargo on Iran, including a ban on all imports including those from the country’s oil, banking and shipping sectors.",
                    "Last year, a study found that 4.5% of all bitcoin mining was taking place in Iran, partly as a result of the country’s cheap electricity. The mining of cryptocurrency could help Iran earn hundreds of millions of dollars that can be used to buy imports and lessen the impact of sanctions.",
                    "The European Union on Monday said it put forward a final text to revive the 2015 Iran nuclear deal as four days of indirect talks between U.S. and Iranian officials wrapped up in Vienna.",
                    "Under the 2015 agreement, Iran curbed its nuclear program in return for relief from U.S., EU and U.N. sanctions. But former U.S. President Donald Trump reneged on the nuclear deal in 2018 and restored harsh U.S. sanctions, prompting Tehran to start violating the agreement’s nuclear limits about a year later.",
                    "Iran made its first official import order using cryptocurrency this week, the semi-official Tasnim agency reported on Tuesday, a move that could enable the Islamic Republic to circumvent U.S. sanctions that have crippled the economy.",
                    "The order, worth $10 million, was a first step towards allowing the country to trade through digital assets that bypass the dollar-dominated global financial system and to trade with other countries similarly limited by U.S. sanctions, such as Russia. The agency didn’t specify which cryptocurrency was used in the transaction.",
                    "By the end of September, the use of cryptocurrencies and smart contracts will be widely used in foreign trade with target countries, an official from the Ministry of Industry, Mine and Trade said on Twitter.",
                    "The United States imposes an almost total economic embargo on Iran, including a ban on all imports including those from the country’s oil, banking and shipping sectors.",
                    "Last year, a study found that 4.5% of all bitcoin mining was taking place in Iran, partly as a result of the country’s cheap electricity. The mining of cryptocurrency could help Iran earn hundreds of millions of dollars that can be used to buy imports and lessen the impact of sanctions.",
                    "The European Union on Monday said it put forward a final text to revive the 2015 Iran nuclear deal as four days of indirect talks between U.S. and Iranian officials wrapped up in Vienna.",
                    "Under the 2015 agreement, Iran curbed its nuclear program in return for relief from U.S., EU and U.N. sanctions. But former U.S. President Donald Trump reneged on the nuclear deal in 2018 and restored harsh U.S. sanctions, prompting Tehran to start violating the agreement’s nuclear limits about a year later."
                  ]
     if(isLoading===true){
        console.log(isLoading);
          <Loader/>       
          } 
  return (
     <Container maxW={"1400px"}  mt="80px">
     <Grid templateColumns={"repeat(3,1fr)"} gap={7}>
       <Box >
         <Menu />
       </Box>
       <Box w="900px" ml="300px">
       { val?.map((e)=>(
        <Box>
        <Text textAlign="start" pb="8px" fontSize="23px">{e.description}</Text>
        <Image src={e.urlToImage} alt="img"/>
        {des.map((element)=>(
          <Box textAlign="start" pt="8px">
            <Text fontSize="23px">{element}</Text>
            <br></br>
          </Box>  
        ))
       }
        </Box>
       ))}
       </Box>  
       <Box w="150px">
        <News />
        </Box>   
     </Grid>
   </Container>
  )
  
}

export default SingleNews