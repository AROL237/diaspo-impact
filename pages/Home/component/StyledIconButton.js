import React from 'react'
import { Box, IconButton } from '@mui/material'
import BoxCenter from '../../../components/BoxCenter'

export default function StyledIconButton({ children, handleClik, bgcolor }) {
    return (
        <IconButton aria-label="" onClick={handleClik} sx={{ px: 0 }}  >
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
