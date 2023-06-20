import React from 'react'
import { Section } from './Section'
import { Box, Typography, Button, Grid } from '@mui/material'
import BoxCenter from './BoxCenter'
import StyledImg from './StyledImg'
import aboutImage from "../../../public/images/about-page-image.jpg"
import testimonyAvatar from "../../../public/images/diaspo-impact.jpg"
import AvatarTestimony from './AvatarTestimony'

export default function AboutUs() {
    const about = {
        "title": "What is Diaspo-impact ?",
        "description": "est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst",
        "image": aboutImage,
        "testimonies": [
            {
                "avatar": aboutImage,
                'talk': '"est placerat in egestas erat imperdiet sed euismod nisi porta lor"'
            },
            {
                "avatar": aboutImage,
                'talk': '"est placerat in egestas erat imperdiet sed euismod nisi porta lor"'
            },
            {
                "avatar": aboutImage,
                'talk': '"est placerat in egestas erat imperdiet sed euismod nisi porta lor"'
            },
            {
                "avatar": aboutImage,
                'talk': '"est placerat in egestas erat imperdiet sed euismod nisi porta lor"'
            },
        ]

    }
    return (
        <Section title={"about us"} titlePosition='center' color={'#E6E6E6'}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: 5
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: { md: 3, lg: 4 },
                        pt: 3
                    }}
                >
                    <BoxCenter
                        sx={{
                            display: 'flex',
                            flexDirection: "column",
                            gap: 3,
                            width: 680,
                            px: 3
                        }}
                    >

                        <Typography variant="h5" fontWeight={'bold'} color="initial">
                            {about.title}
                        </Typography>
                        <Typography textAlign={'justify'} justifyContent={'center'} variant="subtitle1" color="initial">
                            {about.description}
                        </Typography>
                        <BoxCenter >
                            <Button variant="contained" color="info">
                                learn more
                            </Button>
                        </BoxCenter>


                    </BoxCenter>
                    <BoxCenter >
                        <StyledImg image={about.image} alt={'about-image'}
                            sx={{
                                width: "100%",
                                height: { md: 400, lg: 450 },
                                display: { xs: 'none', sm: 'none', md: 'flex' }

                            }} />
                    </BoxCenter>
                </Box>

                <Section title='testimony' titlePosition={'left'}>
                    <Box pt={3}>
                        <Grid
                            container
                            rowSpacing={4}
                            columnSpacing={3}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            alignContent="center"
                            wrap="wrap"

                        >


                            {
                                about.testimonies.map((item, index) => {


                                    return <Grid item key={index}>
                                        <AvatarTestimony {...item} />
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Box>
                </Section>

            </Box>
        </Section>
    )
}
