import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Skeleton from '@mui/material/Skeleton'
import { generateRandonNumberBetween } from '@/utils/randomElement'

const ContactSkeleton = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Skeleton animation="wave" variant="circular" width={40} height={40} />
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width={`${generateRandonNumberBetween()}%`}
            style={{ marginBottom: 6 }}
            />
        }
        subheader={
          <Skeleton animation="wave" height={10} width={'40%'} />
        }
      />
    </Card>
  )
}

export default ContactSkeleton

// export default function Facebook () {
//   return <Media loading />
// }
