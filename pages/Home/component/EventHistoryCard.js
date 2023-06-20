import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import BoxCenter from './BoxCenter'


export default function EventHistoryCard({ date, location, description, name, color }) {
    return (
        <Box p={3}
            sx={{
                bgcolor: color,
                borderRadius: 5,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                width: { xs: 380, sm: 480, md: 600, lg: 480 },
            }}
        >
            <Typography p={1} textTransform={'capitalize'} fontWeight={'bold'} variant="h4" color="initial">
                {name}
            </Typography>
            <Typography px={1} textAlign={'justify'} variant="subtitle1" color="initial">
                {description}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,

                }}

            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        maxWidth: { xs: "none", sm: 380 }
                    }}
                >
                    <Typography textTransform={'capitalize'} fontWeight={'bold'} component={'div'} color="initial">
                        Date:<Typography p={1.8} component={'span'} color='ivory'>
                            {date}
                        </Typography>
                    </Typography>
                    <Typography textTransform={'capitalize'} fontWeight={'bold'} component={'div'} color="initial">
                        location:<Typography p={1.8} component={'span'} color='ivory'>
                            {location}
                        </Typography>
                    </Typography>

                </Box>
                <Box >
                    <Button sx={{ px: 1 }} variant="contained" color="info">
                        Detail View
                    </Button>
                </Box>


            </Box>

        </Box>
    )
}
