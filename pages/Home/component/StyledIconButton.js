import React from 'react'
import { Box, IconButton } from '@mui/material'
import BoxCenter from './BoxCenter'

export default function StyledIconButton({ children, handleClik, bgcolor }) {
    return (
        <IconButton aria-label="" onClick={handleClik}  >
            <BoxCenter
                sx={{
                    bgcolor: bgcolor,
                    padding: 8,
                    width: 35,
                }}
            >
                {children}
            </BoxCenter>
        </IconButton>
    )
}
