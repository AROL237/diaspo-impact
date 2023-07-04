import React from 'react'
import BoxCenter from './BoxCenter'
import Image from 'next/image'
import { styled } from '@mui/material'

export default function PartnerImage({ image, company_name }) {
    const StyledPartnerImage = styled(Image)({
        backgroundColor: 'red',
        borderRadius: '50%',
        width: 200,
        height: 200,
        marginLeft: 2,
        marginRight: 2,

    })
    return (
        <StyledPartnerImage src={image} alt={company_name} />
    )
}
