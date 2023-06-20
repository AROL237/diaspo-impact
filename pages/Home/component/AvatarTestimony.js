import React from 'react'
import { Box, Avatar } from '@mui/material'
import StyledImg from './StyledImg'
import BoxCenter from './BoxCenter'

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
            <blockquote>
                <div>{talk}</div>
            </blockquote>
        </BoxCenter>
    )
}
