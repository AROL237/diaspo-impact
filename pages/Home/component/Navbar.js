import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Container, Divider, Grid, IconButton, Link, List, ListItem, Modal, Stack, useMediaQuery } from '@mui/material'
import { CloseOutlined, Menu as MenuIcon } from '@mui/icons-material'
import { useTheme } from '@emotion/react'
import { useRouter } from 'next/router'

export default function Navbar() {
    var navigations = ['home', "events", 'about', 'event history', 'contact']
    const router = useRouter()
    const theme = useTheme()
    const device = useMediaQuery(theme.breakpoints.up('md'))
    const [openMenu, setOpenMenu] = useState(false)
    function MenuClick(e) {
        e.preventDefault()
        setOpenMenu(prev => !prev)
    }
    const handleNavigation = (e) => {
        e.preventDefault()
        setOpenMenu(open => !open)
        router.push(`#${e.target.name}`)
    }

    return (
        <AppBar position='fixed' color='transparent'
            sx={{
                backdropFilter: "blur(8px)",
                boxShadow: 'none',
                paddingY: 2,
            }}
        >
            {
                device ?
                    <Toolbar  >
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
                                                name = name.replace(" ", "-")
                                                return <Typography fontStyle={'oblique'} fontWeight={'bold'} letterSpacing={0.5} textTransform={'capitalize'} key={index} variant="subtitle1" >
                                                    <Link
                                                        underline='none'
                                                        href={"#".concat(name)}
                                                        sx={{
                                                            color: "#333333",
                                                            "&:hover": {
                                                                color: '#37748C',
                                                                fontWeight: 'bold'
                                                            }
                                                        }}

                                                    >
                                                        {section}
                                                    </Link>
                                                </Typography>

                                            }
                                            return <Typography fontStyle={'oblique'} fontWeight={'bold'} textTransform={'capitalize'} key={index} letterSpacing={0.5} variant="subtitle1">
                                                <Link
                                                    underline='none'

                                                    sx={{
                                                        color: "#333333",
                                                        "&:hover": {
                                                            color: '#37748C',
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
                    : <Toolbar>
                        <Stack width={"100vw"} direction={'row'} spacing={'auto'}   >
                            <Typography variant="h6">
                                <Link href='/' color={'inherit'} underline='none'>
                                    Diaspo-Impact
                                </Link>
                            </Typography>
                            {!openMenu && <IconButton onClick={MenuClick}>
                                <MenuIcon />
                            </IconButton>}
                        </Stack>
                        <Box>
                            <Modal open={openMenu} >
                                <Box
                                    sx={{ bgcolor: '#455757' }}
                                    width={{ xs: 180, sm: 250 }}
                                    height={'100vh'}
                                    flex
                                    flexDirection={'column'}

                                >
                                    <Stack direction='row-reverse'>
                                        <IconButton onClick={MenuClick}>
                                            <CloseOutlined color='secondary' />
                                        </IconButton>
                                    </Stack>
                                    <Stack direction={'column'} spacing={2}
                                        color={"whitesmoke"}

                                    >
                                        <List>
                                            {
                                                navigations.map((section, index) => {
                                                    var name = section.trim()
                                                    if (section.includes(" ")) {
                                                        name = name.replace(" ", "-")
                                                        return <ListItem key={index}>
                                                            <Typography fontStyle={'oblique'} fontWeight={'bold'} letterSpacing={0.5} textTransform={'capitalize'} variant="subtitle1" >
                                                                <Link
                                                                    underline='none'
                                                                    onClick={handleNavigation}
                                                                    name={name}
                                                                    sx={{
                                                                        color: "#333333",
                                                                        "&:hover": {
                                                                            color: '#37748C',
                                                                            fontWeight: 'bold'
                                                                        }
                                                                    }}
                                                                >
                                                                    {section}
                                                                </Link>
                                                            </Typography>
                                                        </ListItem>
                                                    }
                                                    return <ListItem key={index}>
                                                        <Typography fontStyle={'oblique'} fontWeight={'bold'} textTransform={'capitalize'} letterSpacing={0.5} variant="subtitle1">
                                                            <Link
                                                                underline='none'
                                                                sx={{
                                                                    color: "#333333",
                                                                    "&:hover": {
                                                                        color: '#37748C',
                                                                        fontWeight: 'bold'
                                                                    }
                                                                }}
                                                                name={name}
                                                                onClick={handleNavigation}
                                                            > {name}  </Link>
                                                        </Typography>
                                                    </ListItem>
                                                })
                                            }

                                        </List>

                                        <Divider orientation='horizontal' light textAlign='center' />
                                    </Stack>

                                </Box>
                            </Modal>
                        </Box>
                    </Toolbar >
            }
        </AppBar >
    )
}
