import { Box, Container, Grid } from '@chakra-ui/react'
import React from 'react'
import Menu from '../Components/Menu'
import News from '../Components/News'

const LatestNews = () => {
  return (
    <Container maxW={"1400px"}  mt="70px">
    <Grid templateColumns={"repeat(3,1fr)"} gap={5}>
      <Box >
        <Menu />
      </Box >
      <Box w="800px" ml="100px">
        <News />
      </Box>     
      <Box w="200px">
        <News />
      </Box>
    </Grid>
  </Container>
  )
}

export default LatestNews