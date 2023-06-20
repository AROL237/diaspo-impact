import Image from 'next/image'
import React from 'react'
import { styled } from '@mui/material'

export default function StyledImg({ image, alt, sx }) {
    const StyledImg = styled(Image)({
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        boxSizing: 'content-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > div': {
            boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            borderRadius: ' 5px',
        }
    })
    return (
        <StyledImg sx={{ ...sx }} src={image} alt={alt} />
    )
}
