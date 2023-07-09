import { Add } from '@mui/icons-material'
import { Alert, Box, Button, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import Create from './CreateEventForm';

export default function EventActionZone() {
    const [createEvent, setCreateEvent] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState({
        status: false, message: ''
    })

    function newEvent(e) {
        setCreateEvent(true);
    }
    return (
        <Box
            sx={{
                width: '100%', height: '10vh', display: 'flex', flexDirection: 'row', gap: 2,
                p: 3, border: 2
            }}
        >
            <Box width={'100%'} display={'flex'} flexDirection={'row'} gap={2}>
                <Button onClick={newEvent} variant="contained" color="primary" startIcon={<Add />}>
                    create
                </Button>
                {createEvent && <Create setSuccess={setSuccess} open={createEvent} close={setCreateEvent} setError={setError} />}
            </Box>
            {
                success && <Box width={'100%'}>
                    <Snackbar
                        open={success} onClose={(e) => setSuccess(false)} autoHideDuration={8000}
                        color='success'
                    >
                        <Alert color='success' severity='success' onClose={(e) => setSuccess(false)}>
                            <Typography variant="h5" color="inherit">Event Saved!</Typography>
                        </Alert>
                    </Snackbar>
                </Box>
            }
            {
                error.status && <Box width={'100%'}>
                    <Snackbar
                        open={error.status} onClose={(e) => setError({ ...error, status: false })} autoHideDuration={8000}
                        color='error'
                    >
                        <Alert color='error' severity='error' onClose={(e) => setError({ ...error, status: false })}>
                            <Typography variant="h5" color="inherit">{error.message}</Typography>
                        </Alert>
                    </Snackbar>
                </Box>
            }

        </Box>
    )
}
