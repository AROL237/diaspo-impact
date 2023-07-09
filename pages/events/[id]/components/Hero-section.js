
import React, { useEffect, useState } from 'react'
import { Section } from '../../../../components/Section'
import { Alert, Box, Button, Snackbar, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import bg from '../../../../public/images/event-page-hero-bg.png'
import RegisterationForm from './RegisterationForm'
import { yellow } from '@mui/material/colors'
import { SendAndArchive } from '@mui/icons-material'

export default function HeroSection({ id, name, description, fullDescription }) {

    // const eventDate = moment("2023-07-04")
    const [register, setRegister] = useState(false)
    const [saved, setSaved] = useState(false)


    return (
        <Box height={"70vh"} justifyContent={'center'}
            justifyItems={'center'} alignContent={"center"}
            mx={'auto'} >
            <Box sx={{ zIndex: -1, position: 'fixed', width: '100vw', height: '70vh' }} >
                <Image priority src={bg} fill style={{ objectFit: "cover", }} alt='bg-image' />
            </Box>
            <Stack direction={'column'}
                alignItems={'center'}
                alignContent={"space-around"}
                paddingTop={'20vh'}
                spacing={1}
                px={2}

            >
                <Box width={{ sm: 550, md: 600, lg: 700 }} p={2}>
                    <Typography align='center' fontWeight={"bold"} textTransform={'uppercase'} variant={'h4'} color="inherit">
                        {name}
                    </Typography>
                </Box>
                <Box width={{ sm: 500, md: 600, }} pb={2}>
                    <Typography component={'p'} justifyContent={'center'} align='justify' color="inherit">
                        {description}
                    </Typography>
                </Box>
                <Box   >
                    <Button onClick={(e) => setRegister(true)} size='large' variant='contained' color='primary'>
                        take part
                    </Button>
                    {register && <RegisterationForm name={name} register={register} setRegister={setRegister} />}
                </Box>
                <Box>
                    <Stack diriection='row' spacing={'auto'} justifyContent={'center'} alignItems={'center'}>
                        {/* {counter} */}
                        {/* <EventTimer eventDate={eventDate} /> */}
                    </Stack>
                </Box>
                {
                    saved && <Snackbar open={error}
                        onClose={(e) => setSaved(false)}
                        autoHideDuration={5000}
                    >
                        <Alert onClose={() => setSaved(false)} severity="success" sx={{ width: '100%' }}>
                            Saved !
                        </Alert>
                        {/* <Alert color='error' > name filled cannot be empty or a white space</Alert> */}
                    </Snackbar>
                }

            </Stack >
        </Box>
    )
}
