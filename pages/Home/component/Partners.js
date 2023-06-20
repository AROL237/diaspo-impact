import React from 'react'
import { Section } from './Section'
import StyledIconButton from './StyledIconButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Stack } from '@mui/material';
import BoxCenter from './BoxCenter';
import p_image1 from '../../../public/images/Mask_group_all_fixed.png'
import PartnerImage from './PartnerImage';


export default function Partners({ }) {
    const partners = [
        {
            "image": p_image1,
            'company_name': ''
        },
        {
            "image": p_image1,
            'company_name': ''
        },
        {
            "image": p_image1,
            'company_name': ''
        },
    ]
    return (
        <Section title={'our partners'} titlePosition={'center'} >
            <Stack
                direction={'row'} spacing={'auto'}
                py={3}
            >
                <StyledIconButton bgcolor="#E6E6E6" >
                    <ArrowBackIosIcon size='large' />
                </StyledIconButton>
                <BoxCenter >

                    {
                        partners.map((partner, index) => {
                            return <PartnerImage key={index} {...partner} />
                        })
                    }
                </BoxCenter>
                <StyledIconButton bgcolor={"#E6E6E6"}  >
                    <ArrowForwardIosIcon size='large' />
                </StyledIconButton>
            </Stack>
        </Section >
    )
}
