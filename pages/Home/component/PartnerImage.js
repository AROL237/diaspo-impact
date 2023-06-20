import React from 'react'
import BoxCenter from './BoxCenter'
import Image from 'next/image'
import { styled } from '@mui/material'

export default function PartnerImage({ image, company_name }) {
    const StyledPartnerImage = styled(Image)({
        borderRadius: '45%',
        width: 180,
        height: 180,
        marginLeft: 2,
        marginRight: 2
    })
    return (
        <StyledPartnerImage src={image} alt={company_name} />
    )
}
