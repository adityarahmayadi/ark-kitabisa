import React from 'react'
import { Box, Text, Image } from 'goods-core'

const Item = () => (
  <Box
    w
    shadow='rgba(152, 152, 152, 0.2) 0px 2px 8px 1px;'
    radius='l'
    overflow='hidden'
  >
    <Image
      src='https://media-cdn.tripadvisor.com/media/photo-s/13/9f/39/d1/cape-view-clifton.jpg'
      objectFit='cover'
      alt='title'
      w='100%'
      h={{
        xs: '162px',
        sm: '184px',
        md: '184px',
        lg: '224px',
      }}
      mb='xxs'
    />
    <Box p='s' w>
      <Box
        w
        minH={{ xs: '24px', sm: '24px', md: '48px', lg: '72px' }}
      >
        <Text rule='subtitle' mb='xxs'>
          Subtitle
        </Text>
      </Box>
      <Box
        w 
        h='8px'
        radius='4px'
        fAlign='flex-start'
        bg='white40'
        mb='xxs'
      >
        <Box
          w={`min(calc(100% * ${0.2}), 100%)`}
          h='100%'
          bg='red60'
          radius='4px'
        />
      </Box>
      <Box w fDir='row' fJustify='space-between'>
        <Text>Terkumpul</Text>
        <Text>Sisa Hari</Text>
      </Box>
      <Box w fDir='row' fJustify='space-between'>
        <Text>Rp. 200.000</Text>
        <Text>20</Text>
      </Box>
    </Box>
  </Box>
)

const Campaigns = () => (
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
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </Box>
)

export default Campaigns