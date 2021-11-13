import React from 'react';
import Divider from '../../../../components/Divider';
import { Button, Card, CardContent } from '../Home.styled';

export default function NFTCard({ data }) {
  return (
    <Card item>
      <CardContent sx={{ boxShadow: 3 }}>
        {
          data.image ?
            <>
              <div className="nft-image">
                <img alt="" src={data.image} />
              </div>
              <div className="nft-title-small">{data.title}</div>
            </>
            :
            <div className="nft-title">{data.title}</div>
        }
        <div className="nft-info">Bid Count:&nbsp;<p>{data.bidCount}</p></div>
        <div className="nft-info">Winning Bid:&nbsp;<p>{data.winningBid}</p></div>
        <div className="nft-info">End Block:&nbsp;<p>{data.endBlock}</p></div>
        <div className="nft-info">Winner:&nbsp;<p className="wallet-address"><a rel="noreferrer" href={`https://etherscan.io/address/${data.winner}`} target="_blank">{data.winner}</a></p></div>
        <div className="nft-info">Time Left:&nbsp;<p className="time-left">{data.leftTime}</p></div>
        <Divider dark className="nft-card-divider" />
        <div className="nft-card-actions">
          <Button variant="outlined" disabled>Bidding Closed</Button>
        </div>
      </CardContent>
    </Card>
  )
}
