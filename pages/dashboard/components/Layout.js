import React from 'react'
import NavBar from './NavBar'
import { Box, } from '@mui/material'
import SideBar from './SideBar'

export default function Layout({ children }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
            <NavBar />
            <Box display={'flex'} flexDirection={'row'} width={'100%'} >
                <SideBar />
                <Box id='content'
                    display={'flex'} gap={2} flexDirection={'column'} width={'100%'}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    )
}
