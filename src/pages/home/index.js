import React from 'react'
import { Box, Text } from 'goods-core'
import Navbar from './components/navbar'
import Campaigns from './components/campaings'

const Home = () => (
  <Box>
    <Navbar />
    <Box mt={{lg: '102px', sm: '244px'}} w p='s'>
      <Campaigns />
    </Box>
  </Box>
)

export default Home