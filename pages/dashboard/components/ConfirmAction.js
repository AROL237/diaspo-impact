import { Close } from '@mui/icons-material'
import { Box, IconButton, Modal, Stack, Typography, Button } from '@mui/material'
import React from 'react'

export default function ConfirmAction({ action, message, open, close }) {
    const handleConfirm = (e) => {
        e.preventDefault()
        action()
        close(false)
    }
    return (
        <Modal
            open={open}
        >
            <Box bgcolor={'white'} mt="30vh" alignItems={'center'} justifyContent={'center'} mx={'auto'}
                alignContent={'enter'} alignSelf={'center'} p={4} width={400} borderRadius={2}
            >
                <Stack direction={'row'} justifyContent={'space-between'} pb={2}>
                    <Typography align='center' fontWeight={'bold'} variant="h5" color="initial" >Confirmation</Typography>

                </Stack>
                <Box width={'100%'}
                    flexDirection={'column'}
                    flex
                    gap={2}

                >
                    <Typography variant="subtitle1" color="initial">{message}</Typography>
                    <Stack direction={'row'} spacing={1} pt={2}
                        alignItems={'center'} mx={'auto'} justifyContent={'center'} alignContent={'center'}
                    >
                        <Button onClick={handleConfirm} variant="contained" color="primary">
                            confirm
                        </Button>
                        <Button variant="contained" onClick={() => close(false)} color="error">
                            cancel
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    )
}
