import React from 'react'
import EventNavBar from './EventNavBar'

export default function Layout({ children, event }) {
    return (
        <>
            <EventNavBar {...event} />
            <main>
                {children}
            </main>
        </>
    )
}
