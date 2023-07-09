import { Box, Stack, Typography, Link } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import IWBT1 from '../../../../public/images/IWBT-1.jpg'

export default function InviteeCard() {
    const bio = "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    return (
        <Stack
            direction={'column'} spacing={''}
            color={'whitesmoke'} justifyContent={"center"} alignItems={"center"} alignContent={'center'}
            maxWidth={320}
            p={2} borderRadius={2}
            // mx={'auto'}
            border={'3px solid #B3B3B3'}
        >

            <Box>
                <Image src={IWBT1} alt='avatar-image' priority
                    style={{ width: 200, position: 'relative', height: 200, borderRadius: '50%' }}
                />
            </Box>
            <Box pb={.5}>
                <Typography fontSize={30} variant="body1" color="inherit">Nadine Ngoh</Typography>
            </Box>
            <Box mx={'auto'} >
                <Typography align='center' variant="subtitle1" sx={{ color: "#B3B3B3" }}>
                    {bio + bio}
                </Typography>
            </Box>
            <Box pt={1} >
                <Link
                    href="#"
                    variant="body1"
                    underline="hover"
                    target="_blank"
                    rel="noopener noreferrer"

                >
                    social1
                </Link>
            </Box>
        </Stack >
    )
}
