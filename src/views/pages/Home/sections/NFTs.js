import { Grid } from '@mui/material'
import React from 'react'
import NFTCard from '../components/NFTCard'

export default function NFTs({ data }) {
  return (
    <Grid container justifyContent="center" alignItems="center">
      {
        data.map((item, i) => (
          <React.Fragment key={i}>
            <NFTCard data={item} />
          </React.Fragment>
        ))
      }
    </Grid>
  )
}
