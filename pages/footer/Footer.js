import { Box, IconButton, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import Copyright from '../../src/Copyright'
import { FacebookOutlined, LinkedIn, WhatsApp, } from '@mui/icons-material'

export default function Footer() {
    const USEFUL_LINKS = ["home", 'events', 'about', 'event history']
    const contacts = {
        'email': 'sna-tech@gmail.com',
        'phone': ['+237672436519', '+237656920743']
    }
    return (
        <Stack
            direction={'column'}
            paddingTop={3}
            justifyContent={'space-between'}
            alignItems={'stretch'}

            color={'white'}
            spacing={2}
            bgcolor={'#455757'}
        >

            <Stack
                direction={'row'}
                justifyContent={'space-around'}
                alignItems={'center'}
                spacing={2}
                color={'white'}

                bgcolor={'#455757'}
            >
                <Box id={'logo'}>
                    <Typography variant="h4" fontWeight={'bold'} >
                        <Link
                            href='#home'
                            color={'inherit'}
                            underline='none' >
                            Diaspo-Impact
                        </Link>
                    </Typography>

                </Box>
                <Box id={'Usefull links'}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}
                >
                    <Typography
                        py={3}
                        textTransform={'uppercase'} fontWeight={'bold'} variant="h6" color="inherit">
                        Useful links
                    </Typography>
                    {
                        USEFUL_LINKS.map((link, index) => {
                            var finalLink = link.trim()

                            if (finalLink.includes(' '))
                                finalLink = finalLink.replace(' ', '');
                            return <Typography key={index} fontSize={16} textTransform={"capitalize"} variant="subtitle1" color={'inherit'}>
                                <Link sx={{
                                    "&:hover": { fontWeight: 'bold' }
                                }} href={'#'.concat(finalLink)} color={'inherit'} >
                                    {link}
                                </Link>
                            </Typography>
                        })
                    }


                </Box>
                <Box id={'Contact us'} color={'#B3B3B3'}>
                    <Typography
                        py={3}
                        textTransform={'uppercase'} fontWeight={'bold'} variant="h6" color="inherit">
                        Contact us
                    </Typography>
                    <Typography component={'div'} fontSize={20} color="">
                        phone:
                        {
                            contacts.phone.map((phone, index) =>
                                <Typography p={1} key={index} variant="h5" color='initial'>
                                    {phone}
                                </Typography>
                            )
                        }
                    </Typography>
                    <Typography component={'div'} fontSize={20} color="inherit">
                        email:
                        <Typography variant="h5" color='inherit' >
                            <Link href='' sx={{ "&:hover": { color: 'lightskyblue' } }}>
                                {contacts.email}
                            </Link>
                        </Typography>
                    </Typography>
                    <Box>
                        <Typography
                            py={3}
                            textTransform={'uppercase'} fontWeight={'bold'} component={'div'} color="inherit">
                            Follow us
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex', flexDirection: 'row', gap: 2

                            }}
                        >
                            <IconButton>
                                <FacebookOutlined color='primary' sx={{ "&:hover": { color: 'lightskyblue' } }} />
                            </IconButton>
                            <IconButton>
                                <WhatsApp color='primary' sx={{ "&:hover": { color: 'lightskyblue' } }} />
                            </IconButton>
                            <IconButton>
                                <LinkedIn color='primary' sx={{ "&:hover": { color: 'lightskyblue' } }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

            </Stack >
            <Copyright />
        </Stack>
    )
}
