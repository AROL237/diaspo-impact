import React from 'react'
import { Box, Typography, Container, Grid } from '@mui/material'
import event1 from '../../../public/images/Cocktail-event-image.jpg'
import EventCard from './EventCard'
import { Section } from '../../../components/Section'


export const Events = () => {
    var events = [
        {
            'name': 'Cocktail and Networking',
            'description': "cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit"
            , 'status': 'coming soon',
            'date': '2023-10-02',
            'image': event1
        },
        {
            'name': 'Product exhibition',
            'description': "cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit",
            'status': 'coming soon',
            'date': '2022-02-15',
            'image': event1
        },
        {
            'name': 'business gala',
            'description': "cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit",
            'status': 'coming soon',
            'date': '2020-12-25',
            'image': event1
        },

    ]
    return (

        <Section title={'events'} color={'#455757'} titlePosition='center'>

            <Box py={3} alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
                {
                    <Grid
                        container
                        spacing={3}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        alignContent="center"
                        wrap="wrap"
                        columns={{}}

                    >
                        {
                            events.map((event, index) => {
                                var color;
                                if (index % 2 === 0)
                                    color = '#E6E6E6'
                                else
                                    color = '#A9E6BE'
                                return <Grid key={index} item sm={6} lg={4} >
                                    <EventCard key={index} {...event} cardColor={color} />
                                </Grid>
                            }
                            )
                        }
                    </Grid>


                }

            </Box>

            {/* </Box> */}
        </Section>

    )
}
