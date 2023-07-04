import { Box, Modal } from '@mui/material'
import React from 'react'

export default function RegisterationForm({ register, setRegister }) {
    return (
        <Modal open={register}
            onClose={() => setRegister(prev => !prev)}
        >
            <Box marginX={"auto"} bgcolor={'whitesmoke'}
                width="800px" pt={15} height={"40vh"}>

            </Box>
        </Modal>
    )
}
