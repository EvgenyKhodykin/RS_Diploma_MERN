import React from 'react'
import { Box, IconButton, Modal, Paper, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

function ModalWindow({ isOpen, text, onClose }) {
    const handleClose = () => onClose()

    return (
        <Modal
            open={isOpen}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    height: 100,
                    bgcolor: 'background.paper',
                    boxShadow: 24
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='body1' component='h2'>
                        {text}
                    </Typography>
                </Box>
            </Paper>
        </Modal>
    )
}

export default ModalWindow
