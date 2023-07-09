import React, { useState } from 'react'
import { Section } from './Section'
import { Box, Stack, TextField, Typography, Grid, Button } from '@mui/material'

export default function Contact_us() {
    const [client, setClient] = useState({
        name: '', email: '', subject: '', message: '',
    })
    const contact = ['+234548481', '+23715648846']
    const our_days = [{
        day: 'mon-fri',
        time: '80:00 am - 4:00 pm'
    },
    {
        day: 'mon-fri',
        time: '80:00 am - 4:00 pm'
    }
    ]
    const handleChange = (event) => {
        event.preventDefault()
        setClient({ ...client, [event.target.name]: event.target.value })
    }

    return (
        <Section color={'#E6E6E6'} id={'contact'}

        >
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
            >
                <Grid item md={6} width={'100%'} justifyContent={'center'}
                    alignItems={'center'}
                    alignContent={'center'}

                    p={3}
                >
                    <Box
                        sx={{
                            display: "flex", flexDirection: 'column',
                            gap: 2,
                        }}
                        width={'100%'}
                    >
                        <TextField
                            fullWidth
                            id="name"
                            label="your name"
                            value={client.name}
                            onChange={handleChange}
                            name='name'
                            type='text'
                        />
                        <TextField
                            fullWidth
                            id="email"
                            label="email address"
                            value={client.email}
                            onChange={handleChange}
                            name='email'
                            type='email'
                        />
                        <TextField
                            fullWidth
                            id="subject"
                            label="Subject"
                            value={client.subject}
                            onChange={handleChange}
                            type='text'
                            name='subject'
                        />
                        <TextField
                            fullWidth
                            id="message"
                            label="message"
                            variant="outlined"
                            value={client.message}
                            onChange={handleChange}
                            multiline
                            name='message'
                            type='textarea'
                            minRows={2}
                            placeholder='message'
                        />
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
                            <Button variant="contained" color="primary" size={'large'}>
                                submit
                            </Button>
                        </Box>
                    </Box>

                </Grid>
                <Grid item md={6} width={'100%'} justifyContent={'center'}
                    alignItems={'center'}
                    alignContent={'center'}>
                    <Box
                        sx={{
                            display: "flex", flexDirection: 'column', gap: 3,
                        }}
                        width={'100%'}
                    >
                        <Box alignContent={'space-around'}
                            alignItems='center' justifyContent={'center'}>
                            <Typography align='center' variant="h3" sx={{ color: '#4F6677' }} fontWeight={'bold'}>
                                Get in touch
                            </Typography>
                        </Box>
                        <Box
                            display={'flex'} flexDirection={"row"} alignContent={'center'}
                            justifyContent={'center'}
                        >
                            <Grid
                                container
                                spacing={2}
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                                wrap="wrap"

                            >
                                <Grid item xs={12} width={'100%'} lg={6} md={6} sm={4} mx={'auto'}  >
                                    <Box display={'flex'} flexDirection={'column'} gap={2} width={'100%'} alignItems={'center'}>
                                        <Typography textTransform={'uppercase'} variant="h6" sx={{ color: '#B3B3B3' }}>
                                            Location
                                        </Typography>
                                        <Typography variant="subtitle1" fontWeight={'bold'} color="inherit">
                                            litoral, Douala
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} width={'100%'} lg={6} md={6} sm={4} mx={'auto'}  >

                                    <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                        <Typography textTransform={'uppercase'} variant="h6" sx={{ color: '#B3B3B3' }}>
                                            contact
                                        </Typography>
                                        <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} >
                                            {contact.map((obj, index) =>
                                                <Typography key={index} variant="subtitle1" fontWeight={'bold'} color="inherit">
                                                    {obj}
                                                </Typography>
                                            )
                                            }
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} width={'100%'} lg={6} md={6} sm={4} mx={'auto'} >
                                    <Box display={'flex'} flexDirection={'column'} gap={1} width={'100%'} alignItems={'center'}
                                    >
                                        <Typography textTransform={'uppercase'} variant="h6" sx={{ color: '#B3B3B3' }}>
                                            our hours
                                        </Typography>

                                        {
                                            our_days.map((day, index) =>
                                                <Stack key={index} direction={'column'} width={'100%'} spacing={.5} alignItems={'center'} >
                                                    <Typography variant="subtitle1" fontWeight={'bold'} color="inherit">
                                                        {day.day}
                                                    </Typography>
                                                    <Typography variant="subtitle1" fontWeight={'bold'} color="inherit">
                                                        {day.time}
                                                    </Typography>
                                                </Stack>
                                            )
                                        }

                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                    </Box>
                </Grid>

            </Grid>

        </Section >
    )
}
