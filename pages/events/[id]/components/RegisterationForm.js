import { Box, Paper, IconButton, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, Modal, Stack, Typography, Grid, TextField, Backdrop, CircularProgress, Snackbar, Button, Alert } from '@mui/material'
import React, { useState } from 'react'
import CountrySelect from './CountrySelect'
import { Cancel, Close, Save } from '@mui/icons-material'
import API from '../../../api/API'

export default function RegisterationForm({ name, id, register, setRegister, setSave }) {
    const [restrictions, setRestrictions] = useState(false)
    const [error, setError] = useState([{
        message: '', status: false
    }])
    var eventIds = []
    eventIds.push(id)
    const [USER, setUser] = useState({
        'eventId': eventIds,
        'firstName': '',
        'lastName': '',
        'email': '',
        'country': '',
        'restriction': 'I have no dietary restrictions',
        "company": '',
        'phone': '',
    })
    async function handleSubmit(e) {
        e.preventDefault()
        console.log(USER);
        if (USER.firstName === '' || USER.firstName === ' '
            || USER.company == '' || USER.company === ' ' || USER.country == '' || USER.country == ' '
            || USER.email == '' || USER.email == ' ' || USER.restriction == '' || USER.restriction == ' ' ||
            USER.lastName == '' || USER.lastName == ' '
        )
            setError({
                status: true, message: "Oops! fill in the required field. white space are not accepted."
            })

        else {
            const data = await API.post(`/clients`, USER)
                .then(res => {
                    if (res.status == 200) {
                        setSaved(true)
                        setRef
                    }
                })

            i

        }
    }
    function handleChange(event) {
        event.preventDefault()
        setUser({ ...USER, [event.target.name]: event.target.value })
    }

    const handleClose = (e) => {
        e.preventDefault()
        setRegister(false)
    }

    return (
        <Modal open={register}
            sx={{
                overflow: 'scroll',
                pb: 5

            }}
        >
            <Box marginX={"auto"} bgcolor={'whitesmoke'}
                width={{ xs: '100%', sm: '100%', md: '800px', lg: 1000 }} mt={'10vh'}
                borderRadius={3}
                border={'2px solid gold'}
                p={2}
            >
                <Stack direction={'row'}
                    spacing={'auto'}

                    padding={2} >

                    <Box >
                        <Typography variant="h5" color="textPrimary">
                            {/* load user by id an display details */}
                            Reservation

                        </Typography>
                    </Box>
                    <Box sx={{
                        border: "1px solid red", '&:hover': {
                            bgcolor: 'gray'
                        }
                    }}>

                        <IconButton onClick={handleClose}

                        >
                            <Close color="error" />
                        </IconButton>
                    </Box>
                </Stack>
                <Box bgcolor={'#FFFFFF'} p={{ xs: 2, sm: 2, md: 4 }} borderRadius={2}
                    display={'flex'} flexDirection={'column'} gap={2}
                >
                    <Box>
                        <TextField
                            value={name}
                            disabled
                        />
                    </Box>

                    <Box display={'flex'} flexDirection={'row'}
                        justifyContent='center'
                        alignItems="'center"
                        alignContent={'center'} width={'100%'}
                    >
                        <Grid container gap={2}
                            direction='row'
                            // justifyContent="center"
                            // alignContent='center'
                            // alignItems='center'
                            wrap={'wrap'}
                        >
                            <Grid item xs={12} sm={5} md={5} lg={4} >

                                <TextField
                                    fullWidth
                                    id="firstname"
                                    label="first name *"
                                    value={USER.firstName}
                                    onChange={handleChange}
                                    type="text"
                                    name='firstName'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}  >

                                <TextField
                                    fullWidth
                                    id="lastname "
                                    label="last name *"
                                    value={USER.lastName}
                                    onChange={handleChange}
                                    type="text"
                                    name='lastName'
                                />
                            </Grid>
                            <Grid item xs={12} sm={7} md={7} lg={6}  >

                                <TextField
                                    fullWidth
                                    id="email *"
                                    label="Email address *"
                                    value={USER.email}
                                    onChange={handleChange}
                                    type='email'
                                    name='email'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4} >

                                <TextField
                                    fullWidth
                                    id="phoneNumber "
                                    label="phone *"
                                    value={USER.phone}
                                    onChange={handleChange}
                                    type='tel'
                                    name='phone'
                                />
                            </Grid>
                            <Grid item xs={11} sm={6} md={5} lg={5}>
                                <TextField
                                    fullWidth
                                    id="company "
                                    label="comapany name *"
                                    value={USER.company}
                                    onChange={handleChange}
                                    type='text'
                                    name={'company'}
                                />
                            </Grid>
                            <Grid item  >
                                <CountrySelect setUser={setUser} USER={USER} />
                            </Grid>
                            <Grid item xs={11} sm={11} md={11} lg={11}  >
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Food Restriction *</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="restriction"
                                        value={USER.restriction}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="I have no dietary restrictions"
                                            onClick={(e) => setRestrictions(false)}
                                            control={<Radio />} label={'I have no dietary restrictions'} />
                                        <FormControlLabel value="I am vegiterian"
                                            onClick={(e) => setRestrictions(false)}
                                            control={<Radio />} label={"I am vegiterian"} />
                                        <FormControlLabel value=""
                                            onClick={(e) => setRestrictions(true)}
                                            control={<Radio />} label={"I don't consume"}
                                        />
                                    </RadioGroup>
                                    {
                                        restrictions && <Box display='flex' width={"100%"} flexDirection={'row'} gap={2} padding={2}>

                                            <TextField
                                                id="restriction"
                                                label="require *"
                                                value={USER.restriction}
                                                onChange={handleChange}
                                                type="text"
                                                name='restriction'
                                                multiline
                                                maxRows={4}
                                                error={USER.restriction.length < 1}
                                                fullWidth
                                            />
                                            <IconButton onClick={() => {
                                                setUser({ ...USER, 'restriction': 'I have no dietary restrictions' })
                                                setRestrictions(false)
                                            }}>
                                                <Close />
                                            </IconButton>

                                        </Box>}
                                </FormControl>
                            </Grid>

                        </Grid>
                    </Box>
                    {
                        error.status && <Box key={error.id}>
                            <Snackbar open={error}
                                onClose={(e) => setError(false)}
                                autoHideDuration={7000}
                            >
                                <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
                                    {error.message}
                                </Alert>
                                {/* <Alert color='error' > name filled cannot be empty or a white space</Alert> */}
                            </Snackbar>
                        </Box>}
                    <Box
                        display={'flex'} flexDirection={'row'} gap={2} p={2}
                        alignItems='center' alignContent='center' justifyContent='center'
                    >


                        <Button
                            variant="contained"
                            color="info"
                            startIcon={<Save />}
                            onClick={handleSubmit}
                        >
                            save
                        </Button>
                        <Button variant="contained"
                            color="error"
                            startIcon={<Cancel />}
                            onClick={handleClose}
                        >
                            cancel
                        </Button>

                    </Box>
                </Box>

            </Box>
        </Modal >
    )
}
