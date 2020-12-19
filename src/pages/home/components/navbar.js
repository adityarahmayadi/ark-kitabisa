import React from 'react'
import { Box, Image, Text } from 'goods-core'

const Navbar = () => (
  <Box 
    w
    p='s'
    fDir='row'
    as='header'
    fJustify='space-between'
    fAlign='center'
    posi='fixed'
    bg='white10'
  >
    <Box fDir='row' fAlign='center'>
      <Image
        src={require('@kitabisa/assets/images/logo.png')}
        objectFit='contain'
        b='1px solid'
        bC='blue50'
        radius='full'
        mr='s'
        w='62px'
        h='62px'
        alt='Kitabisa'
      />
      <Text rule='title' weight='bold'>
        Kitabisa
      </Text>
    </Box>

    <Box fDir='row'>
      <Box  
        mr='s'
        p='s'
        bg='blue50'
        radius='24px'
        cursor='pointer'
      >
        <Text c='white10'>Sorting by Donation Goal</Text>
      </Box>
      <Box
        radius='24px'
        p='s'
        cursor='pointer'
        bg='blue50'
      >
        <Text c='white10'>Sorting by Remaining Days</Text>
      </Box>
    </Box>
  </Box>
)

export default Navbar