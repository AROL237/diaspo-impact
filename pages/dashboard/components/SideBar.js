import { Box, Divider, Link, List, ListItem, Typography } from '@mui/material'
import React from 'react'

export default function SideBar() {
    return (
        <Box
            id='nav side bar'
            sx={{
                bgcolor: 'ButtonFace',
                width: '20vw', height: '100vh',

            }}
        >
            <Box
                sx={{
                    pt: '5vh'
                }}
            >
                <List>
                    <Divider orientation='horizontal' />
                    <ListItem>
                        <Link
                            sx={{ color: '#96D9D9' }}
                            href=""
                            underline="hover"
                            rel="noopener noreferrer"

                        >
                            <Typography variant="h5" color="inherit">Events</Typography>
                        </Link>
                    </ListItem>
                    <Divider orientation='horizontal' />
                    {/* <ListItem>admin</ListItem>
                <Divider orientation='horizontal' /> */}
                    {/* <ListItem></ListItem>
                <Divider orientation='horizontal' />
                <ListItem></ListItem>
                <Divider orientation='horizontal' />
                <ListItem></ListItem>
                <Divider orientation='horizontal' />
                <ListItem></ListItem> */}
                </List>

            </Box>


        </Box>
    )
}
