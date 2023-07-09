import React, { useState } from 'react'
import { Box, Modal, Typography, Grid, TextField, FormGroup, FormControlLabel, Button, IconButton, Stack, Checkbox, Snackbar, Alert } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { Close } from '@mui/icons-material';
import API from '../../api/API';

export default function Create({ open, close, setSuccess, setError }) {
    const date = dayjs("2023-06-01")
    const time = dayjs('2022-04-17T15:30')
    const [data, setData] = useState({
        name: '', date: date,
        description: '', fullDescription: '',
        status: false, time: time,
        location: '',
    })
    function handleClose(e) {
        e.preventDefault()
        close(false)
    }
    function handleChange(e) {
        e.preventDefault()
        setData({ ...data, [e.target.name]: e.target.value })
    }
    function handleSave(e) {
        e.preventDefault()
        dayjs
        const now = dayjs()
        var getDate = () => data.date.format('YYYY-MM-DD')
        var getTime = () => {
            var hour = data.time.hour()
            var minute = data.time.minute().valueOf()
            if (hour < 10) {
                hour = '0' + hour;
            }
            if (minute < 10)
                minute = "0" + minute

            return (hour + ':' + minute).toString()
        }
        // console.log(getTime());
        const event = {
            name: data.name,
            description: data.description,
            status: data.status,
            fullDescription: data.fullDescription,
            date: getDate(),
            time: getTime(),
            location: data.location
        }
        API.post(`/events`, event, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status == 201) {
                setSuccess(true)
            }
        })
            .catch((err) => {
                setError({ status: true, message: "failed to saved event!!" })
            })
        close(false)

    }

    return (

        <Modal
            open={open}
            sx={{
                my: '10vh'
            }}
        >
            <Box
                sx={{
                    bgcolor: "white", borderRadius: 3,
                    p: 4, display: "flex", flexDirection: 'column', gap: 3,
                    maxWidth: 700, mx: 'auto'
                }}
            >
                <Stack direction='row' spacing='auto' justifyContent="">

                    <Typography variant="h5" color="initial">Create</Typography>
                    <Box
                        border={'2px dotted red'}
                    >
                        <IconButton color='error' onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </Box>
                </Stack>
                <Box
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} width={'100%'}
                    pt={3} px={2} pb={2}
                >
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        alignContent="center"
                        wrap="wrap" width={'100%'}
                        gap={2}

                    >
                        <Box
                            sx={{
                                display: 'flex'
                                , flexDirection: 'column'
                                , gap: 2, width: '100%'
                            }}
                        >

                            <Grid item >
                                <TextField
                                    fullWidth
                                    id="name"
                                    label="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    name='name'
                                />
                            </Grid>


                            <Grid item>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={data.status}
                                                onChange={(e) => setData({ ...data, 'status': e.target.checked })}
                                                inputProps={{ 'aria-label': 'controlled', }}
                                            />
                                        }
                                        label={'status'}
                                    />

                                </FormGroup>
                            </Grid>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex'
                                , flexDirection: 'row'
                                , gap: 2,
                            }}
                        >
                            <Grid item width={'100%'}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Select Date"
                                        value={data.date}

                                        onChange={(newValue) => setData({ ...data, 'date': newValue })}
                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item width={'100%'}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimePicker

                                        label="Start time"
                                        value={data.time}
                                        onChange={(newValue) => setData({ ...data, 'time': newValue })}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Box>
                        <Grid item>
                            <TextField
                                id="location"
                                label="location"
                                value={data.location}
                                onChange={handleChange}
                                type='text'
                                name='location'
                            />
                        </Grid>
                        <Grid item width={'100%'}>
                            <TextField
                                fullWidth
                                id="short description"
                                label="short description"
                                value={data.description}
                                onChange={handleChange}
                                multiline
                                rows={2}
                                maxRows={3}
                                name='description'
                            />
                        </Grid>
                        <Grid item width={'100%'} >
                            <TextField
                                fullWidth
                                id="full description"
                                label="full description"
                                value={data.fullDescription}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                maxRows={6}
                                name='fullDescription'
                            />
                        </Grid>
                    </Grid>
                    <Box
                        alignItems={'center'} justifyContent={'center'} alignContent={'center'}
                        width={'100%'} mx='auto'
                        display={'flex'} flexDirection={'row'} gap={2}

                    >
                        <Button onClick={handleSave} variant="contained" color="primary">
                            save
                        </Button>
                        <Button variant="contained" color="error" onClick={handleClose}>
                            close
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Modal >



    )
}
