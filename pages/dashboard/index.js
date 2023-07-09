import React from 'react'
import Layout from './components/Layout'
import API from '../api/API';
import EventList from './components/EventList';
import EventActionZone from './components/EventActionZone';
import { Box } from '@mui/material';


export default function dashboard() {

    return (
        <Layout>
            <Box
            >
                <EventActionZone />
                <EventList />
            </Box>
        </Layout>
    )
}
