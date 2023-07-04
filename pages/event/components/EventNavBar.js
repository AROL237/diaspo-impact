import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Button, Link, Stack, Container, useMediaQuery, useTheme, IconButton, Modal, Icon, List, ListItem, Divider } from '@mui/material'
import { CloseOutlined, Menu as MenuIcon } from '@mui/icons-material'
import RegisterationForm from './RegisterationForm'

export default function EventNavBar({ registertionHandler }) {
    const navigation = ['events', 'about', 'faq', 'contact']
    const theme = useTheme()
    const device = useMediaQuery(theme.breakpoints.up('md'))
    const [openMenu, setOpenMenu] = useState(false)
    function MenuClick(e) {
        e.preventDefault()
        setOpenMenu(prev => !prev)
    }
    const [register, setRegister] = useState(false)
    return (
        <AppBar position="fixed" color="transparent"
            sx={{
                bgcolor: '#E6E6E6',
                boxShadow: 'none',
                paddingY: 2.5
            }}
        >
            {
                device ?
                    <Toolbar >
                        <Container maxWidth='xl'>

                            <Stack direction={'row'} spacing={'auto'} alignItems={"flex-start"} justifyContent={'center'} alignContent={'space-around'}>
                                <Typography variant="h6">
                                    <Link href='/' color={'inherit'} underline='none'>
                                        Diaspo-Impact
                                    </Link>
                                </Typography>

                                <Stack direction={'row'} spacing={10} >
                                    < Stack direction={'row'} spacing={2} >
                                        {
                                            navigation.map((section, index) => {
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

                                                } else
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
                                    </Stack>
                                    <Box justifyContent={"center"} alignContent={"center"} alignItems={'center'}>
                                        <Button onClick={registertionHandler} variant='contained' color='primary'>
                                            Register now
                                        </Button>
                                        <RegisterationForm setRegister={setRegister} register={register} />
                                    </Box>
                                </Stack>
                            </Stack>
                        </Container>

                    </Toolbar >
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
                                            <ListItem>
                                                <Link href='/' underline='none' color={'inherit'}>
                                                    home
                                                </Link>
                                            </ListItem>
                                            <ListItem>
                                                <Link href='/description' underline='none' color={'inherit'}>
                                                    description
                                                </Link>
                                            </ListItem>
                                            <ListItem>
                                                <Link href='#about' underline='none' color={'inherit'}>
                                                    about
                                                </Link>
                                            </ListItem>
                                            <ListItem>
                                                <Link href='#fag' underline='none' color={'inherit'}>
                                                    faq
                                                </Link>
                                            </ListItem>
                                            <ListItem>
                                                <Link href='#contact' underline='none' color={'inherit'}>
                                                    contact
                                                </Link>
                                            </ListItem>
                                        </List>

                                        <Divider orientation='horizontal' light textAlign='center' />
                                    </Stack>

                                </Box>
                            </Modal>
                        </Box>
                    </Toolbar>
            }
        </AppBar >
    )
}
