import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Container, Grid, Link, Stack } from '@mui/material'

export default function Navbar() {
    var navigations = ['home', "events", 'about', 'event history', 'contact']


    return (
        <AppBar position="fixed" color=''
            sx={{

                boxShadow: 'none',
                paddingY: 2.5
            }}
        >
            <Toolbar >
                <Container maxWidth={'xl'}>

                    <Stack direction={"row"} spacing={"auto"} paddingX={8} >
                        <Typography variant="h6" fontWeight={'bold'} >
                            <Link
                                href='#home'
                                color={'inherit'}
                                underline='none' >
                                Diaspo-Impact
                            </Link>
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 3,
                                marginRight: 0
                            }}
                        >
                            {
                                navigations.map((section, index) => {
                                    var name = section
                                    if (section.includes(" ")) {
                                        name = name.replace(" ", "")
                                        return <Typography fontWeight={'light'} textTransform={'capitalize'} key={index} variant="subtitle1" >
                                            <Link
                                                underline='none'
                                                href={"#".concat(name)}
                                                sx={{
                                                    color: "#333333",
                                                    "&:hover": {
                                                        color: 'blue',
                                                        fontWeight: 'bold'
                                                    }
                                                }}

                                            >
                                                {section}
                                            </Link>
                                        </Typography>

                                    }
                                    return <Typography fontWeight={'light'} textTransform={'capitalize'} key={index} variant="subtitle1">
                                        <Link
                                            underline='none'

                                            sx={{
                                                color: "#333333",
                                                "&:hover": {
                                                    color: 'blue',
                                                    fontWeight: 'bold'
                                                }
                                            }}
                                            href={"#".concat(name)}
                                        > {name}  </Link>
                                    </Typography>
                                })
                            }
                        </Box>

                    </Stack>
                </Container>
            </Toolbar>
        </AppBar >
    )
}
