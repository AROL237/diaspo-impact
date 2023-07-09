import React from 'react'
import { styled, Box } from '@mui/material'

export default function BoxCenter({ children, sx }) {
    const StyledBox = styled(Box)({
        justifyContent: 'center',
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 2,
        paddingRight: 2,
    })
    return (
        <StyledBox sx={...sx} >
            {children}
        </StyledBox>
    )
}
