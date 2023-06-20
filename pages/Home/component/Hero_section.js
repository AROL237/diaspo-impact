import React from 'react'
import { Box, Typography, Button, } from '@mui/material'
import style from '../home.module.css'

export default function Hero_section() {
    return (
        <div className={style.hero_section}>
            <Box
                sx={{
                    maxWidth: 700,
                    marginLeft: '8%',
                    paddingTop: 40,
                }}
                className={style.hero_message_text}>
                <Typography variant="body1" textAlign={'center'} fontWeight={'bold'}
                    fontSize={30} color="initial">
                    Do you want to show up your latent or product, or are
                    you a business person looking for a good place to invest ?
                </Typography>
                <Box
                    sx={{
                        padding: 5,
                        marginX: 'auto',
                        alignContent: 'center',
                        justifyContent: "center",
                        textAlign: 'center'
                    }}
                >
                    <Button variant='contained' >
                        take a look
                    </Button>

                </Box>

            </Box>

        </div>
    )
}
