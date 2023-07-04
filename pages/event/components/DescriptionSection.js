import React from 'react'
import { Section } from '../../../components/Section'
import { Box, Button, Stack, Typography } from '@mui/material'
import RegisterationForm from './RegisterationForm'

export default function DescriptionSection({ description, registertionHandler }) {
    return (
        <Section title={"description"} titlePosition={"center"} color={"#D8C3C3"}>
            <Stack alignContent={"space-around"}
                justifyContent={"center"} mx={'auto'}
                direction={'row'} spacing={{ md: "auto", lg: 20 }} >
                <Box mx={'auto'} display={{ xs: "none", sm: 'none', md: 'block' }}  >
                    <Typography align='center' variant="h3" color="textSecondary">
                        overview
                    </Typography>
                </Box>
                <Box width={{ sm: "100vw", md: 600, lg: 700, }} px={2} >
                    <Typography align='justify' variant="body1" color="initial"> {description}</Typography>
                    <Box py={4}>
                        <Button variant='contained' onClick={registertionHandler} size='large' >
                            Take part
                        </Button>
                        <RegisterationForm />
                    </Box>
                </Box>

            </Stack>
        </Section>
    )
}
