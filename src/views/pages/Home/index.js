import React, { useState } from 'react';
import Divider from '../../../components/Divider';
import Header from '../../components/Header';
import IntroSection from './sections/IntroSection';
import NFTSection from './sections/NFTSection';
import { Content, Wrapper, Title, CurrentBlock, UnlockWalletButton, LockedWrapper } from './Home.styled';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEthers } from "@usedapp/core";
import SnackAlert from '../../../components/Alerts';
import { handleLogin, setWalletAddress } from '../../../redux/actions/auth';

export default function Home() {
	const dispatch = useDispatch();

	const { activateBrowserWallet, account } = useEthers();

	const [alert, setAlert] = useState({
		open: false,
		type: "success",
		message: ""
	})

	const handleCloseAlert = () => {
		setAlert({
			...alert,
			open: false
		})
	}

	const handleConnectWallet = () => {
		activateBrowserWallet((error) => {
			if (error.code === -32002) {
				setAlert({
					open: true,
					type: "error",
					message: "Please unlock your metamask!"
				})
			} else {
				setAlert({
					open: true,
					type: "error",
					message: error.message
				})
			}
		});
	}

	const handleUnlockWallet = () => {
		handleConnectWallet();
		dispatch(handleLogin(true));
		if (account) {
			dispatch(setWalletAddress(account));
		}
	}

	const walletAddress = useSelector(state => state.auth.walletAddress);

	return (
		<Content>
			<Header connectWallet={handleConnectWallet} />
			{
				walletAddress ?
					<Wrapper>
						<Title>Brand Central Auction</Title>
						<IntroSection />
						<Divider dark />
						<NFTSection />
						<CurrentBlock>Current Block: 13601647</CurrentBlock>
					</Wrapper>
					: <LockedWrapper>
						<UnlockWalletButton onClick={handleUnlockWallet}>🔓 Unlock Wallet</UnlockWalletButton>
					</LockedWrapper>
			}
			<Footer />
			<SnackAlert open={alert.open} type={alert.type} message={alert.message} closeAlert={handleCloseAlert} />
		</Content>
	)
}
