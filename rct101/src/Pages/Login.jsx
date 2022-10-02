import {useState,useEffect} from 'react'
import {Button, Container, Input, Stack, Text} from "@chakra-ui/react"
import { Auth,reset } from '../context/Action'
import { AuthContext } from '../context/AuthContextProvider'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../Components/Menu'
const Login = () => {
  const [login,setLogin]=useState("")
   const {state,dispatch}=useContext(AuthContext)
   const navigate=useNavigate();
  const handle=()=>{
   dispatch(Auth(login))
  }
  console.log(state)

  if(state.isAuth){
    return (navigate("/") )
   }
  
  
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div style={{width:"1500px"}}>
      <Container mt="80px" boxShadow='dark-lg' >
      <Stack spacing='24px' mt="15px" mb="15px">
        <Text fontSize={32}>Login</Text>
      <Input fontSize={20} type="text" name="email" placeholder='Email' onChange={(e)=>{setLogin(e.target.value)}} />
      <Input fontSize={20} type="password" name="pass" placeholder='Password' />
      <Button fontSize={24}  onClick={handle}>Submit</Button>
      </Stack>
    </Container>
      </div>
    </div>
    
  )
}

export default Login