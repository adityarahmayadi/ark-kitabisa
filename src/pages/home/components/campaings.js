import React, { useEffect, useState } from 'react'
import { Box, Text } from 'goods-core'
import { url } from '@kitabisa/utils/constant'
import { useFetch } from '@kitabisa/hooks/use-fetch'
import Item from './item'
import Loader from './loader'

const Campaigns = () => {
  const [fetchData, {data, error, loading}] = useFetch()

  useEffect(() => {
    fetchData(`${url.cors}${url.campaign}`)
  }, [])

  if(error){
    return(
      <Box w fAlign='center'>
        <Text>Something went wrong</Text>
      </Box>
    )
  }

  if(loading){
    return(
      <Box
      w
      d='grid'
      gap='24px'
      gTempCol={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
    >
      {
        [...new Array(6)].map((_, index) => (
          <Loader key={index} />
        ))
      }
    </Box>
    )
  }

  return(
    <Box
      w
      d='grid'
      gap='24px'
      gTempCol={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
    >
      {
        data.map(item => (
          <Item key={item.id} {...item} />    
        ))
      }
    </Box>
  )
}

export default Campaigns