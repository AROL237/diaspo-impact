import React from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import StyledImg from './StyledImg'
import BoxCenter from '../../../components/BoxCenter'

export default function AvatarTestimony({ avatar, talk }) {
    return (
        <BoxCenter
            sx={{
                display: 'flex',
                flexDirection: "row",
            }}
        >

            <StyledImg sx={{
                width: 100,
                height: 100,
                borderRadius: "50%"
            }} image={avatar} alt={"avatar"} />
            <Typography variant='body2' maxWidth={360} component={'blockquote'} px={1} >
                {talk}
            </Typography>
        </BoxCenter>
    )
}
