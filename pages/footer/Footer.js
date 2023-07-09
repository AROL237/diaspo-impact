import { Box, IconButton, Link, Stack, Typography, Grid } from '@mui/material'
import React from 'react'
import Copyright from '../../src/Copyright'
import { FacebookOutlined, LinkedIn, WhatsApp, } from '@mui/icons-material'
import { Section } from '../../components/Section'


export default function Footer() {
    const USEFUL_LINKS = ["home", 'events', 'about', 'event history']
    const contacts = {
        'email': 'sna-tech@gmail.com',
        'phone': ['+237672436519', '+237656920743']
    }
    return (

        <Section color={'#455757'}
            sx={{
                justifyContent: 'space-around',
                alignItems: 'center',
                alignContent: 'center',
                color: 'white'
            }}
        >

            <Grid
                container
                spacing={2}
                direction="row"
                justifyContent='center'
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                width={'100%'}

            >

                <Grid item xs={12} sm={12} md={4}                 >
                    <Box id={'logo'} alignItems={'stretch'} alignContent={'center'} >
                        <Typography align='center' variant="h4" fontWeight={'bold'} >
                            <Link
                                href='#home'
                                color={'inherit'}
                                underline='none' >
                                Diaspo-Impact
                            </Link>
                        </Typography>
                    </Box>
                </Grid>


                <Grid item xs={12} sm={12} md={4}                 >
                    <Box id={'Usefull links'}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2, alignContent: 'center', alignItems: 'center', justifyContent: "space-around"
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
                                    <Link
                                        underline='none'
                                        sx={{
                                            color: '#96D9D9',
                                            "&:hover": { fontWeight: 'bold' }
                                        }} href={'#'.concat(finalLink)}  >
                                        {link}
                                    </Link>
                                </Typography>
                            })
                        }


                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}                 >
                    <Box id={'Contact us'}
                        display={'flex'} flexDirection="column" flexWrap="wrap" gap={1}
                        alignContent={'center'} justifyContent={'space-around'}

                    >
                        <Typography
                            py={3}
                            textTransform={'uppercase'} fontWeight={'bold'} variant="h6" color="inherit">
                            Contact us
                        </Typography>
                        <Box display={'flex'} gap={1} flexDirection="row" flexWrap="wrap">
                            <Typography component={'div'} fontSize={20} color="inherit">
                                phone:
                            </Typography>
                            <Box>
                                {
                                    contacts.phone.map((phone, index) =>
                                        <Typography key={index} variant="subtitle1" sx={{ color: '#96D9D9' }}>
                                            {phone}
                                        </Typography>
                                    )
                                }
                            </Box>
                        </Box>
                        <Box display={'flex'} gap={1} flexDirection="row" flexWrap="wrap">

                            <Typography component={'div'} fontSize={20} color="inherit">
                                email:
                            </Typography>
                            <Box>
                                <Typography variant="h5" color='info' >
                                    <Link href='' underline='none' sx={{ color: '#96D9D9', "&:hover": { color: 'lightskyblue' } }} >
                                        {contacts.email}
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            display={'flex'} flexDirection={'row'} flexWrap="wrap" gap={2}
                            py={2}
                        >
                            <Box alignContent={'center'} justifyContent={'center'} alignItems={'center'} py={1}>
                                <Typography justifyContent={"center"} align='center' alignItems={'center'} alignContent={'center'}
                                    textTransform={'uppercase'} fontWeight={'bold'} component={'div'} color="inherit">
                                    Follow us
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex', flexDirection: 'row',
                                    justifyContent: 'center', alignItems: 'center'
                                }}
                            >
                                <IconButton>
                                    <FacebookOutlined color='info' sx={{ "&:hover": { color: 'lightskyblue' } }} />
                                </IconButton>
                                <IconButton>
                                    <WhatsApp color='info' sx={{ "&:hover": { color: 'lightskyblue' } }} />
                                </IconButton>
                                <IconButton>
                                    <LinkedIn color='info' sx={{ "&:hover": { color: 'lightskyblue' } }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>


            </Grid>
            {/* </Stack > */}
            {/* <Copyright /> */}
            {/* </Stack > */}
        </Section >
    )
}
