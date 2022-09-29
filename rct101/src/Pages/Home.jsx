import React from 'react'
import News from '../Components/News'
import Menu from '../Components/Menu'
import { Flex, Container, Grid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
const Home = () => {
  return (
    <Container maxW={"1400px"}  mt="15px">
      <Grid templateColumns={"repeat(3,1fr)"}gap={5}>
        <Box >
          <Menu />
        </Box>
        <Box w="700px">
          <News />
        </Box>
        <Box w="300px">
          <News />
        </Box>
      </Grid>
    </Container>
  )
}

export default Home