import React from 'react'
import { Section } from '../../../../components/Section'
import BoxCenter from '../../../../components/BoxCenter'
import InviteeCard from './InviteeCard'
import { Stack, Grid, Box, Button } from '@mui/material'
import { useRouter } from 'next/router'

export default function InviteeSection() {
    const router = useRouter()

    const invited = [{}, {}, {},]
    const speakersPage = (e) => {
        e.preventDefault()
        router.push("/event/speaker")
    }
    return (
        <Section title={'i will be there'} color={"#455757"} titleTextColor={'white'} titlePosition={'center'}
            sx={{
                display: 'flex', flexDirection: 'column', gap: 2,
                alignItems: 'center', justifyContent: 'center',
                alignContent: 'center'
            }}
        >
            <Stack py={2} gap={2} direction={{ sm: "column", md: 'row' }}
                alignContent={"center"}
                alignItems={"center"}
                justifyContent={'center'}
            >
                {
                    invited.map((item, index) => {
                        return <InviteeCard key={index}  {...item} />
                    }
                    )
                }
            </Stack>
            <Box alignItems={'center'}
                justifyContent={'center'} alignContent={'center'}
            >
                <Button onClick={speakersPage} variant="contained" size={'small'} color="secondary">
                    see more
                </Button>
            </Box>



        </Section >
    )
}
