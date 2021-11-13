import { Typography } from '@mui/material';
import React, { useState } from 'react'
import TabPanel from '../../../../components/TabPanel';
import { nftTempData } from '../../../../theme/variables/tempData';
import { NFTsWrapper, Tab, Tabs } from '../Home.styled';
import NFTs from './NFTs';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NFTSection() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  }

  return (
    <NFTsWrapper>
      <div className="tab-header">
        <Tabs
          value={activeTab}
          onChange={handleChangeTab}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab value={0} label="Show All" {...a11yProps(0)} />
          <Tab value={1} label="My Tickers" {...a11yProps(1)} />
          <Tab value={2} label="Battle Space" {...a11yProps(2)} />
        </Tabs>
      </div>
      <div className="nft-tab-content">
        <TabPanel value={activeTab} index={0}>
          <NFTs data={nftTempData} />
        </TabPanel>
        <TabPanel value={activeTab} index={1}><Typography variant="h5" color="white" textAlign="center">There is no data.</Typography></TabPanel>
        <TabPanel value={activeTab} index={2}><Typography variant="h5" color="white" textAlign="center">There is no data.</Typography></TabPanel>
      </div>
    </NFTsWrapper>
  )
}
