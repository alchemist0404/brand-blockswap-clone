import React from 'react'
import { Button, Modal } from '@mui/material'
import { ModalContent } from './Header.styled'

export default function AccountModal({open, handleClose, address, signOut}) {

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent>
        <Button className="e-button btn-etherscan" href={`https://etherscan.io/address/${address}`} target="_blank">View On Etherscan</Button>
        <Button className="e-button" onClick={signOut}>Sign Out</Button>
        <Button className="e-button btn-cancel" onClick={handleClose}>Cancel</Button>
      </ModalContent>
    </Modal>
  )
}
