import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Logo, AccountBtn } from './Header.styled';
import { useEthers } from "@usedapp/core";
import AccountModal from './AccountModal';
import { handleLogin, setWalletAddress } from '../../../redux/actions/auth';

export default function Header({ connectWallet }) {
	const dispatch = useDispatch();

	const { account } = useEthers();

	const [openAccountModal, setOpenAccountModal] = useState(false);

	const walletAddress = useSelector(state => state.auth.walletAddress);
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

	const handleUnlockWallet = () => {
		connectWallet();
		dispatch(handleLogin(true));
	}

	const handleCloseModal = () => {
		setOpenAccountModal(false);
	}

	useEffect(() => {
		if ((account && !isLoggedIn) || (!account && isLoggedIn)) {
			dispatch(setWalletAddress(""));
			dispatch(handleLogin(false));
		}
	}, [account])

	useEffect(() => {
		if (isLoggedIn && account) {
			dispatch(setWalletAddress(account));
		}
	}, [isLoggedIn, account])

	const handleSignOut = () => {
		dispatch(setWalletAddress(""));
		handleCloseModal();
		dispatch(handleLogin(false));
	}

	return (
		<header>
			<Wrapper>
				<Logo />
				{
					walletAddress ? <AccountBtn variant="contained" disableElevation onClick={() => setOpenAccountModal(true)}>My Account</AccountBtn>
						:
						<AccountBtn variant="contained" disableElevation onClick={handleUnlockWallet}>Unlock Wallet</AccountBtn>
				}
			</Wrapper>
			<AccountModal open={openAccountModal} handleClose={handleCloseModal} address={walletAddress} signOut={handleSignOut} />
		</header>
	)
}
