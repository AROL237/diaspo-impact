
import React, { useEffect, useState } from 'react'
import { Section } from '../../../components/Section'
import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import bg from '../../../public/images/event-page-hero-bg.png'
import moment from 'moment/moment'
import EventTimer from './EventTimer'

export default function HeroSection({ name, description, full_description }) {

    const eventDate = moment("2023-07-04")
    const [counter, setCounter] = useState(0)

    return (
        <Box height={"70vh"} justifyContent={'center'} justifyItems={'center'} alignContent={"center"} mx={'auto'} >
            <div style={{ zIndex: -1, position: 'fixed', width: '100vw', height: '70vh' }} >
                <Image src={bg} fill style={{ objectFit: "cover", }} alt='bg-image' />
            </div>
            <Stack direction={'column'}
                alignItems={'center'}
                alignContent={"space-around"}
                paddingTop={'20vh'}
                spacing={1}

            >
                <Box width={{ sm: 550, md: 600, lg: 700 }} p={2}>
                    <Typography align='center' fontWeight={"bold"} textTransform={'uppercase'} variant={'h4'} color="inherit">
                        {name}
                    </Typography>
                </Box>
                <Box width={{ sm: 500, md: 600, }} p={2}>
                    <Typography component={'p'} justifyContent={'center'} align='justify' color="inherit">
                        {description}
                    </Typography>
                    {/* <Typography component={'p'} color="inherit">
                        {full_description}
                    </Typography> */}
                </Box>
                <Box   >
                    <Button size='large' variant='contained' color='primary'>
                        take part
                    </Button>
                </Box>
                <Box>
                    <Stack diriection='row' spacing={'auto'} justifyContent={'center'} alignItems={'center'}>
                        {/* {counter} */}
                        {/* <EventTimer eventDate={eventDate} /> */}
                    </Stack>
                </Box>

            </Stack >
        </Box>
    )
}
