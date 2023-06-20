import React, { useEffect } from 'react'
import { Card, styled, Box, CardHeader, Paper, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button } from '@mui/material'
import Image from 'next/image'
import style from '../home.module.css'
import BoxCenter from "./BoxCenter"
import StyledImg from './StyledImg'

export default function EventCard({ name, description, status, date, image, cardColor }) {


    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                mx: 0, px: 0,
                bgcolor: cardColor,
                width: { xs: 380, sm: 410, md: 430, },
                borderRadius: 5,
            }}
            elevation={0}
        >
            <StyledImg image={image} alt='event-image'
                sx={{
                    width: { xs: 380, sm: 410, md: 430, },
                    height: 300
                }} />
            <BoxCenter sx={{ paddingTop: 1 }} >
                <Typography px={2} fontWeight={'bold'} textTransform={'capitalize'} align='left' variant="h4" color="initial" >
                    {name}
                </Typography>
            </BoxCenter>

            <Box sx={{
                py: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
            }}>
                <BoxCenter sx={{ px: 4 }}>
                    <Typography variant="body2" justifyContent={'center'} textAlign={'justify'} color="initial">
                        {description}
                    </Typography>
                </BoxCenter>
                <Box display={"flex"} flexDirection={"column"} gap={2}
                    px={3}
                >
                    <Typography component={'div'} sx={{ color: '#757575' }}>
                        status:<Typography px={2} component={'span'} color="error">
                            {status}
                        </Typography>
                    </Typography>
                    <Typography component={'div'} sx={{ color: '#757575' }}>
                        Date:
                        <Typography px={2} component={'span'} color="error">
                            {date}
                        </Typography>
                    </Typography>
                </Box>

                <BoxCenter sx={{
                    display: 'flex'
                    , flexDirection: 'row'
                    , gap: 2,
                    paddingBottom: 2,
                    paddingTop: 1
                }}
                >

                    <Button variant="contained" size='large' color="primary">
                        register
                    </Button>
                    <Button variant="contained" size='large' color="info">
                        learn more
                    </Button>
                </BoxCenter>

            </Box>
        </Box>
    )
}
