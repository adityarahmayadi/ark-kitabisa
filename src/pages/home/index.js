import React from 'react'
import { Box, Text } from 'goods-core'
import Navbar from './components/navbar'

const Home = () => (
  <Box>
    <Navbar />
    <Box mt='102px' w fAlign='center'>
      <Text>Content</Text>
    </Box>
  </Box>
)

export default Home