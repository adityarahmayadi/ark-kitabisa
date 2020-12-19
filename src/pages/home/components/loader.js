import React from 'react'
import { Skeleton, Box } from 'goods-core'

const Loader = () => (
  <Box
    w
    shadow='rgba(152, 152, 152, 0.2) 0px 2px 8px 1px;'
    radius='l'
    overflow='hidden'
  >
    <Skeleton
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
      <Skeleton
        w='80%'
        h='24px'
        mb='xxs'
      />
      <Skeleton
        w 
        h='8px'
        radius='4px'
        mb='xxs'
      />
      <Box
        w
        fDir='row'
        fJustify='space-between'
        mb='xxs'
      >
        <Skeleton
          w='30%'
          h='8px'
          radius='4px'
        />
        <Skeleton
          w='20%'
          h='8px'
          radius='4px'
        />
      </Box>
      <Box
        w
        fDir='row'
        fJustify='space-between'
        mb='xxs'
      >
        <Skeleton
          w='50%'
          h='8px'
          radius='4px'
        />
        <Skeleton
          w='10%'
          h='8px'
          radius='4px'
        />
      </Box>
    </Box>
  </Box>
)

export default Loader