import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import API from '../../api/API'
import { Alert, IconButton, Snackbar, TableFooter, Typography } from '@mui/material'
import { AddPhotoAlternate, DeleteOutline, EditOutlined, Image, UpdateDisabledOutlined } from '@mui/icons-material'
import useSWR from 'swr'
import dayjs from 'dayjs'
import ConfirmAction from './ConfirmAction'

export default function EventList() {
    const [confirmation, setConfirmation] = useState(false)
    const [confirmObject, setConfirmObject] = useState({})
    const fetcher = (...args) => API.get(...args).then(res => res.data)
    const [response, setResponse] = useState({ status: false, message: '' })
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    const now = dayjs()
    const url = `/events?page=0&size=10&sort=id,asc`
    const { isLoading, error, data } = useSWR(url, fetcher)
    if (isLoading)
        return (<Box paddingTop={'10vh'} >
            <center>
                <p>loading...</p>
            </center>
        </Box>)
    if (error)
        return (
            <Box paddingTop={'10vh'} >
                <center>
                    <p>Oops! some thing went wrong.</p>
                </center>
            </Box>
        )

    var events = data.content
    // console.log(events);

    const deleteEvent = ({ id }) => (e) => {
        // e.preventDefault()
        API.delete(`/events/${id}`)
            .then(res => {
                if (res.status == 204) {
                    setResponse({ status: true, message: "Event deleted.", color: 'success' })
                } if (res.status == 400)
                    setResponse({ status: true, message: "failed to delete", color: 'error' })
                if (res.status == 404) {
                    setResponse({ status: true, message: "Not Found", color: 'error' })
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    const handleAction = (object, name) => (e) => {
        // e.preventDefault()
        // const name = e.target.name
        if (name === "delete") {
            const message = ` Do you want to delete '${object.name}'`
            setConfirmObject({ name: name, open: confirmation, action: deleteEvent(object), message, close: setConfirmation })
            setConfirmation(true)
        }
    }

    return (
        <Box display="row" mx="2px" my="2px" sx={{
            m: 4
        }}>
            <TableContainer component={Paper}

            >
                <Table aria-label="simple table"
                    sx={{
                        width: '100%'
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right" width={150}>NAME</TableCell>
                            <TableCell align="right" width={150}>DATE</TableCell>
                            <TableCell align="right" width={150}>TIME</TableCell>
                            <TableCell align="right" width={150}>STATUS</TableCell>
                            <TableCell align="right" width={150}>LOCATION</TableCell>
                            <TableCell align="right" width={150}>ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            events && events.map((event, index) => {

                                return (
                                    <TableRow key={index}>
                                        <TableCell >
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="right">
                                            {event.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {dayjs(event.date).fromNow()}
                                        </TableCell>
                                        <TableCell align="right">
                                            {event.time}
                                        </TableCell>
                                        <TableCell align="right">
                                            {event.status ?
                                                <Typography variant="body1" sx={{ color: 'green' }}>active</Typography>
                                                : <Typography variant="body1" sx={{ color: 'red' }}>disable</Typography>}
                                        </TableCell>
                                        <TableCell align="right">
                                            {event.location}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Box
                                                sx={{ display: 'flex', width: '100%' }}
                                            >
                                                <IconButton color='primary'>
                                                    <EditOutlined />
                                                </IconButton>
                                                <IconButton color='info' >
                                                    <AddPhotoAlternate />
                                                </IconButton>
                                                <IconButton color='error' onClick={handleAction(event, 'delete')}>
                                                    <DeleteOutline />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                    <TableFooter>

                    </TableFooter>
                </Table>
            </TableContainer>
            {response.status && <Box width={'100%'}>
                <Snackbar
                    open={response.status} onClose={(e) => setResponse({ ...response, status: false })} autoHideDuration={8000}
                    color={response.color}
                >
                    <Alert color={response.color} severity={response.color} onClose={(e) => setResponse({ ...response, status: false })}>
                        <Typography variant="h5" color="inherit">{response.message}</Typography>
                    </Alert>
                </Snackbar>
            </Box>
            }
            {
                confirmation && <Box>
                    <ConfirmAction {...confirmObject} />
                </Box>
            }
        </Box>
    )
}
