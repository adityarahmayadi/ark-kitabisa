import React, { useEffect, useMemo, useState } from 'react'
import { Box, Text } from 'goods-core'
import { url } from '@kitabisa/utils/constant'
import { useFetch } from '@kitabisa/hooks/use-fetch'
import Item from './item'
import Loader from './loader'
import { useAppContext } from '@kitabisa/context/app.context'

const useCampaigns = () => {
  const [{ campaigns }, dispatch] = useAppContext()
  const [fetchData, { data }] = useFetch()

  useEffect(() => {
    fetchData(`${url.cors}${url.campaign}`)
  }, [])

  useEffect(() => {
    if (data) {
      dispatch({
        type: 'SET_CAMPAIGNS',
        payload: {
          campaigns: data,
        },
      })
    }
  }, [data])

  return {
    campaigns
  }
}

const Campaigns = () => {
  const { campaigns } = useCampaigns()

  const Content = useMemo(() => () => {
    if(campaigns){
      return campaigns.map(item => (
        <Item key={item.id} {...item} />    
      ))
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
        [...new Array(6)].map((_, index) => (
          <Loader key={index} />
        ))
      }
    </Box>
    )
  })

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
      <Content />
    </Box>
  )
}

export default Campaigns