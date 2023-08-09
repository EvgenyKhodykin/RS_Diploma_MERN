import { Alert, Snackbar } from '@mui/material'
import React from 'react'

function Snack({ isOpen, handleClose, text }) {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={1500}
        >
            <Alert severity='success'>{text}</Alert>
        </Snackbar>
    )
}

export default Snack
