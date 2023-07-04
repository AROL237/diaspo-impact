import { Close } from '@mui/icons-material'
import { Box, IconButton, Modal, Stack } from '@mui/material'
import React from 'react'

export default function RegisterationForm({ register, setRegister }) {
    return (
        <Modal open={register}
            onClose={() => setRegister(prev => !prev)}
        >
            <Box marginX={"auto"} bgcolor={'whitesmoke'}
                width="800px" mt={'10vh'} height={"40vh"}
            >
                <Stack direction={'row-reverse'} padding={2}>
                    <IconButton>
                        <Close color="error" />
                    </IconButton>
                </Stack>

            </Box>
        </Modal>
    )
}
