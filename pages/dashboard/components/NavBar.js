import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Typography, Stack, Box, Avatar } from '@mui/material/'

export default function DashboardNaveBar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Stack direction='row' width={'100%'} px={10} py={2} spacing={'auto'}>
                    <Box>
                        <Typography variant="h6">
                            Diaspo-impact
                        </Typography>
                    </Box>
                    <Box>
                        <Avatar size='large' />
                    </Box>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
