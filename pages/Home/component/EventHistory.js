import React from 'react'
import { Box, Grid, Container } from "@mui/material"
import { Section } from '../../../components/Section'
import EventHistoryCard from './EventHistoryCard'

export default function EventHistory() {
    var events = [
        {
            'name': 'Cocktail and Networking',
            'description': "cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit"
            , 'location': 'cameroon , Litoral Douala',
            'date': '2023-10-02',
            'image': ''
        },
        {
            'name': 'Product exhibition',
            'description': "cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit",
            'location': 'cameroon , Litoral Douala',
            'date': '2022-02-15',
            'image': ''
        },
        {
            'name': 'business gala',
            'description': "cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit",
            'location': 'cameroon , Litoral Douala',
            'date': '2020-12-25',
            'image': ''
        },

    ]
    return (
        <Section title={"event History"} sx={{ p: 2 }} titlePosition='center'>

            <Box >
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justifyContent="center"
                    // alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                    columns={{}}

                >
                    {events.map((event, index) => {
                        var color;
                        if (index % 2 === 0)
                            color = "#9B9191"
                        else
                            color = '#477E7E'
                        return <Grid key={index} lg={4} md={6} sm={12} justifyContent={'center'} item >
                            <EventHistoryCard {...event} color={color} />
                        </Grid>
                    })}
                </Grid>
            </Box>
        </Section>
    )
}
