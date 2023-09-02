import { Paper, Typography } from '@mui/material'
import React from 'react'

function EmptyCommentsList() {
    return (
        <Paper
            sx={{
                backgroundColor: '#e3f9e1',
                mt: 4,
                p: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Typography variant='body2' sx={{ color: 'gray', fontFamily: 'cursive' }}>
                Здесь пока никто ничего не писал...
            </Typography>
        </Paper>
    )
}

export default EmptyCommentsList
