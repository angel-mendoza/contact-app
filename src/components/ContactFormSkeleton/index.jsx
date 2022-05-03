import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import { generateRandonNumberBetween } from '@/utils/randomElement'

const ContactFormSkeleton = () => {
  return (
    <div>
      <Skeleton height={30} variant="text" />
      <Skeleton variant="text" width={`${generateRandonNumberBetween()}%`} />
      <Skeleton variant="text" width={`${generateRandonNumberBetween()}%`} style={{ marginBottom: 10 }} />
      <Skeleton variant="rectangular" width={'100%'} height={118} />
    </div>
  )
}

export default ContactFormSkeleton
