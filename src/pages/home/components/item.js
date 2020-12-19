import React from 'react'
import { Box, Image, Text } from 'goods-core'
import { formatIDR } from '@kitabisa/utils/helpers'

const Item = ({ 
  image,
  title,
  donation_percentage,
  donation_received,
  days_remaining 
}) => (
  <Box
    w
    shadow='rgba(152, 152, 152, 0.2) 0px 2px 8px 1px;'
    radius='l'
    overflow='hidden'
  >
    <Image
      src={image}
      objectFit='fill'
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
        h={{ xs: '24px', sm: '24px', md: '48px', lg: '72px' }}
      >
        <Text mb='xxs'>
          {title}
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
          w={`min(calc(100% * ${donation_percentage}), 100%)`}
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
        <Text>{formatIDR(donation_received)}</Text>
        <Text>{days_remaining}</Text>
      </Box>
    </Box>
  </Box>
)

export default Item