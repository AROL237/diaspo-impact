import React, { useEffect, useState } from 'react'
import { Card, styled, Box, CardHeader, Paper, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button } from '@mui/material'
import Image from 'next/image'
import style from '../home.module.css'
import BoxCenter from "../../../components/BoxCenter"
import StyledImg from './StyledImg'
import { useRouter } from 'next/router'
import RegisterationForm from '../../events/[id]/components/RegisterationForm'
import dayjs from 'dayjs'

export default function EventCard({ id, name, date, time, description, fullDescription, status, image, cardColor }) {
    const router = useRouter()
    const now = dayjs()
    const [register, setRegister] = useState(false)
    function handleClick(e) {
        e.preventDefault()
        switch (e.target.name) {
            case 'register': setRegister(prev => !prev)
                break;
            case 'learn more':
                router.push(`/events/${id}`);
                break;
        }
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                mx: 0, px: 0,
                bgcolor: cardColor,
                width: { xs: '100%', sm: 410, md: 430, },
                borderRadius: 5,
            }}
            elevation={0}
        >
            <StyledImg image={image} alt='event-image'
                sx={{
                    width: { xs: '100%', sm: 410, md: 430, },
                    height: 295
                }} />
            <BoxCenter sx={{ paddingTop: 1 }} >
                <Typography px={2} fontWeight={'bold'}
                    textTransform={'capitalize'}
                    align='left' variant="h4" color="initial" >
                    {name}
                </Typography>
            </BoxCenter>

            <Box sx={{
                py: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
            }}>
                <BoxCenter sx={{ px: 3 }}>
                    <Typography variant='body2' justifyContent={'center'} textAlign={'justify'} color="initial">
                        {description}
                    </Typography>
                </BoxCenter>
                <Box display={"flex"} flexDirection={"column"} gap={2}
                    px={3}
                >
                    <Typography variant='subtitle2' component={'div'} >
                        status:<Typography px={2} variant='body2' sx={{ color: 'green' }} component={'span'} >
                            {status ? 'active' : 'disable'}
                        </Typography>
                    </Typography>
                    <Typography variant='subtitle2' component={'div'} >
                        Date:
                        <Typography px={2} variant='body2' sx={{ color: 'green' }} component={'span'}>
                            {dayjs(date + "T" + time).format('DD, MMM YYYY \n hh:mm')}
                        </Typography>
                    </Typography>
                </Box>

                <BoxCenter sx={{
                    display: 'flex'
                    , flexDirection: 'row'
                    , gap: 1,
                    paddingBottom: 2,
                    paddingTop: 1
                }}
                >

                    <Button name='register' onClick={handleClick} variant="contained" color="primary">
                        register
                    </Button>
                    <Button name='learn more' onClick={handleClick} variant="contained" color="info">
                        learn more
                    </Button>
                    {register && <RegisterationForm register={register} id={id} setRegister={setRegister} />
                    }
                </BoxCenter>

            </Box>
        </Box>
    )
}
