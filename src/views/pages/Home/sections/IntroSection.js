import { Grid } from '@mui/material'
import React from 'react'
import { Button, IntroWrapper } from '../Home.styled'

export default function IntroSection() {
  return (
    <>
      <IntroWrapper container justifyContent="center">
        <Grid item md={6} xs={12} className="intro-item">
          <ul>
            <li>Blockswap is giving the first opportunity to claim a StakeHouse name on mainnet to SHB holders.</li>
            <li>The auction will run for 5 days.</li>
            <li>Each day 10 StakeHouse names can be proposed on a first come first serve basis.</li>
          </ul>
        </Grid>
        <Grid item md={6} xs={12} className="intro-item">
          <ul>
            <li>In the last 200 blocks (approx 50 minutes) each additional bid will increase the time remaining by 100 blocks (approx 25 minutes) until someone loses the battle.</li>
            <li>Minimum Bid increase is 2 SHB.</li>
            <li>Additional details on the auction <a href="https://blog.blockswap.network/brand-central-auction-how-to-guide-3ac1f66564db">here</a>. Read FAQ <a href="https://blockswap.notion.site/blockswap/FAQ-Brand-Central-Auction-a5924cb32a114bbba53c0b27a77e1230">here</a>.</li>
          </ul>
        </Grid>
      </IntroWrapper>
      <Button variant="outlined" disabled className="btn-stake-house">Aution Has Ended</Button>
    </>
  )
}
