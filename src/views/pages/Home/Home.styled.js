import {
  Button as MuiButton,
  Grid,
  Tab as MuiTab,
  Tabs as MuiTabs
} from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import variables from '../../../theme/variables';

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background: ${variables.colors.bgColor}; */
`

export const Title = styled.div`
  font-family: LCD-Solid,Arial,sans-serif;
  color: ${variables.colors.primary2};
  font-size: 3rem;
  text-align: center;
  margin-top: 4rem;
`;

export const IntroWrapper = styled(Grid)`
  &&{
    margin: 2.5rem 1rem 1rem 1rem;
    max-width: 980px;
    .intro-item {
      &:first-child{
        padding-right: 2rem;
      }
      &:last-child {
        ul {
          padding-left: 1rem;
        }
      }
    }
    ul {
      padding-left: 0;
      li {
        color: ${variables.colors.whiteColor};
        font-family: Overpass,Arial,sans-serif;
        line-height: 1.75rem;
        font-size: 1.125rem;
        a {
          color: ${variables.colors.whiteColor};
        }
      }
    }
  }
`;

export const Button = styled(MuiButton)`
  &&{
    text-transform: none !important;
    border: 1px solid #abacad !important;
    color: ${variables.colors.whiteColor2} !important;
    font-family: Overpass,Arial,sans-serif;
    font-size: 1rem;
    &:hover{
      border: 1px solid #abacad !important;
    }
    &.btn-stake-house {
      font-size: 1.5rem;
      width: 24rem;
      margin-bottom: 2rem;
    }
  }
`;

export const NFTsWrapper = styled.div`
  margin: 2rem 0;
  width: 100%;
  .tab-panel-content {
    padding: 0 2rem;
    max-width: 1550px;
    margin: auto;
  }
  .tab-header {
    width: fit-content;
    margin: auto;
  }
  .nft-tab-content {
    width: 100%;
  }
`;

export const Tab = styled(MuiTab)`
  && {
    color: white;
    text-transform: none;
    opacity: .7;
    font-family: Overpass,Arial,sans-serif;
    font-size: 1.25rem;
    padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    margin: 0 0.5rem;
    height: unset;
    min-height: 0;
    &.Mui-selected {
      opacity: 1;
      color: white !important;
    }
  }
`;

export const Tabs = styled(MuiTabs)`
  && {
    min-height: 0;
    margin-bottom: 2rem;
    .MuiTabs-indicator {
      background-color: white;
    }
  }
`;

export const Card = styled(Grid)`
  &{
    width: 270px;
    height: 450px;
    margin: 0 0.75rem 2rem 0.75rem !important;
  }
  `;

export const CardContent = styled(Box)`
  &{
    background-color: #141a25;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .nft-title {
      font-family: LCD-Solid,Arial,sans-serif;
      font-size: 3.75rem;
      color: ${variables.colors.primary2};
      text-align: center;
      line-height: 1;
      margin-bottom: 5rem;
      margin-top: 3.5rem;
      padding-top: 0.75rem;
      letter-spacing: -.05em;
    }
    .nft-image {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 8rem;
      margin-top: 1rem;
      img {
        max-height: 128px;
        width: auto;
        height: auto;
        user-select: none;
        -webkit-user-drag: none;
      }
    }
    .nft-title-small {
      font-family: LCD-Solid,Arial,sans-serif;
      font-size: 1.875rem;
      color: ${variables.colors.primary2};
      text-align: center;
      line-height: 2.25rem;
      margin-bottom: .75rem;
      margin-top: .25rem;
      padding-top: 0.75rem;
      letter-spacing: -.05em;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .nft-info {
      padding-top: 0.5rem;
      text-align: left;
      font-size: 1rem;
      line-height: 1.15rem;
      font-weight: 300;
      font-family: Overpass,Arial,sans-serif;
      color: ${variables.colors.whiteColor};
      display: flex;
      align-items: center;
      p {
        font-weight: 600;
        color: ${variables.colors.whiteColor};
        display: inline;
        margin: 0;
        &.time-left {
          color: ${variables.colors.primary2};
        }
        &.wallet-address {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          a {
            color: ${variables.colors.whiteColor};
            text-decoration: none;
          }
        }
      }
    }
    .nft-card-divider {
      margin-top: 1rem;
      margin-left: -2rem;
      width: 300px;
    }
    .nft-card-actions {
      margin-top: 1rem;
      width: 100%;
      button{
        width: 100%;
      }
    }
  }
`;

export const CurrentBlock = styled.div`
  margin: 1rem 1.25rem 2rem 1.25rem;
  font-family: Overpass,Arial,sans-serif;
  color: ${variables.colors.grayColor};
  `;

export const Foot = styled.footer`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .contract-address {
    text-align: center;
    a {
      color: ${variables.colors.grayColor};
      text-decoration: none;
      font-family: Overpass,Arial,sans-serif;
    }
  }
`;

export const UnlockWalletButton = styled(MuiButton)`
  && {
    padding: 0.25rem 1.25rem 0 1.25rem;
    background-color: ${variables.colors.primary2};
    font-size: 1.25rem;
    text-transform: none;
    height: 3rem;
    font-family: Overpass,Arial,sans-serif;
    font-weight: 600;
    color: rgba(28,28,28,1);
    &:hover {
      background-color: rgba(99,214,109,1);
    }
  }
`;

export const LockedWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 256px);
  display: flex;
  justify-content: center;
  align-items: center;
`;