import React from 'react';
import { Foot } from '../../pages/Home/Home.styled';

export default function Footer() {
  return (
    <Foot>
      <div className="contract-address">
        <a target="_blank" rel="noreferrer" href="https://etherscan.io/address/0x4ea67aebb61f7ff6e15e237c8b79d29c41f750fd">Contract</a>
      </div>
    </Foot>
  )
}
