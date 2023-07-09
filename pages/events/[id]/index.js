
import React, { useState } from 'react'
import HeroSection from './components/Hero-section'
import { Box } from '@mui/material'
import DescriptionSection from './components/DescriptionSection'
import InviteeSection from './components/InviteeSection'
import FaqSection from './components/FaqSection'
import Contact_us from '../../../components/Contact_us'
import Layout from './components/Layout'
import API from '../../api/API'
export default function eventPage({ event }) {
    // const description = 'est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu'
    // const name = 'cocktail party and Networking'
    // const fullde = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus interdum posuere lorem ipsum dolor sit amet. Massa massa ultricies mi quis hendrerit dolor magna eget est. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Odio eu feugiat pretium nibh ipsum. Nisi porta lorem mollis aliquam ut porttitor. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Est lorem ipsum dolor sit. Tellus integer feugiat scelerisque varius morbi enim nunc. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl."
    // const program = [{}, {}]
    const registertionHandler = (e) => {
        e.preventDefault()
        console.log('Register')
    }
    // const events = data
    return (
        <Layout event={event}>
            <Box>
                <HeroSection  {...event} />
                <DescriptionSection {...event} />
                <InviteeSection {...event} />
                <FaqSection {...event} />
                <Contact_us />
            </Box>
        </Layout>

    )
}

export async function getServerSideProps({ params }) {
    const id = params.id
    const event = await API.get(`/events/${id}`).then(response => {
        if (response.status == 200)
            return response.data
    }
    )
    return {
        props: {
            event
        }
    }
} 
