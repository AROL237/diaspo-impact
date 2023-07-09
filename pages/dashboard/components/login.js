import { Box, Paper, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'

export default function dashboard() {
    const [login, setLogin] = useState({
        email: '', password: ''
    })
    function handleChange(e) {
        e.preventDefault()
        setLogin({ ...login, [e.target.name]: e.target.value })

    }
    return (
        <Box
            sx={{
                alignContent: 'center', justifyContent: "center", alignItems: 'center',
                mx: 'auto', pt: '10vh'
            }}
        >
            <Paper
                p={2} sx={{
                    display: 'flex', flexDirection: 'column',
                    width: { sm: '100%', md: 600 }
                }}
            >

                <Typography variant="h4" color="textPrimary">Login</Typography>
                <TextField
                    fullWidth
                    type='email'
                    name='email'
                    label='email'
                    value={login.email}
                />
                <TextField
                    fullWidth
                    type='passord'
                    name='password'
                    label='password'
                    value={login.password}
                />
                <Box>
                    <Button variant='contained' >login</Button>
                </Box>

            </Paper>

        </Box>
    )
}
