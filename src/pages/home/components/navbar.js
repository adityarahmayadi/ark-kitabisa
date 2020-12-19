import React, { useCallback } from 'react'
import { Box, Image, Text } from 'goods-core'
import { useAppContext } from '@kitabisa/context/app.context'

const useSort = () => {
  const [{ sortActive }, dispatch] = useAppContext()

  const onSorting = useCallback(
    id => () => {
      dispatch({
        type: 'SORT_BY',
        payload: {
          sortActive: id !== sortActive ? id : 'order',
        },
      })
    },
    [sortActive]
  )

  return {
    sortActive,
    onSorting,
  }
}

const Navbar = () => {
  const { sortActive, onSorting } = useSort()
  return(
    <Box 
      w
      p='s'
      fDir={{ xs: 'column', lg: 'row' }}
      as='header'
      fJustify='space-between'
      fAlign='center'
      posi='fixed'
      bg='white10'
    >
      <Box fDir='row' fAlign='center' m={{xs: 's', lg: '0'}} w>
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

      <Box fDir={{ xs: 'column', lg: 'row' }} w fJustify='flex-end'>
        <Box  
          mr={{xs: '0', lg: 's'}}
          mb={{xs: 's', lg: '0'}}
          p='s'
          bg={
            sortActive === 'donation_target' ? 'blue50' : 'black30'
          }
          radius='24px'
          cursor='pointer'
          fAlign='center'
          onClick={onSorting('donation_target')}
        >
          <Text c='white10'>Sorting by Donation Goal</Text>
        </Box>
        <Box
          radius='24px'
          p='s'
          cursor='pointer'
          bg={
            sortActive === 'days_remaining' ? 'blue50' : 'black30'
          }
          fAlign='center'
          onClick={onSorting('days_remaining')}
        >
          <Text c='white10'>Sorting by Remaining Days</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar