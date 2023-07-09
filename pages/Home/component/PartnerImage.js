import React from 'react'
import BoxCenter from '../../../components/BoxCenter'
import Image from 'next/image'
import { styled } from '@mui/material'

export default function PartnerImage({ image, company_name }) {
    const StyledPartnerImage = styled(Image)({
        backgroundColor: 'red',
        borderRadius: '50%',
        width: 200,
        height: 200,
        marginLeft: 1,
        marginRight: 1,

    })
    return (
        <StyledPartnerImage src={image} alt={company_name} />
    )
}
