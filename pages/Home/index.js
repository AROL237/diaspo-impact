import React from 'react'
import Navbar from './component/Navbar'
import Hero_section from './component/Hero_section'
import { Events } from './component/Events'
import { useRouter, NextRouter } from 'next/router'
import EventHistory from './component/EventHistory'
import AboutUs from './component/AboutUs'
import Partners from './component/Partners'
import Footer from '../footer/Footer'



export const Home = () => {
    const router = useRouter()
    return (
        <>
            <Navbar />
            <Hero_section />
            <Events />
            <EventHistory />
            <AboutUs />
            <Partners />
            <Footer />
        </>
    )
}
