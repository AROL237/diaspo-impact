import React, { useState } from 'react'
import { Section } from '../../../../components/Section'
import { Box, Button, Stack, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material'
import RegisterationForm from './RegisterationForm'

export default function DescriptionSection({ name, description, program, fullDescription, }) {
    const [register, setRegister] = useState(false)
    return (
        <>
            <Section title={"description"} titlePosition={"center"} color={"#D8C3C3"}>
                <Stack alignContent={"space-around"}
                    direction={'row'} spacing={{ md: "auto", lg: 20 }} >
                    <Box pl={5} display={{ xs: "none", sm: 'none', md: 'block' }}  >
                        <Typography textTransform={"capitalize"} align='center' variant="h3" color="textSecondary">
                            overview
                        </Typography>
                    </Box>
                    <Box width={{ sm: "100vw", md: 600, lg: 700, }} px={2} >
                        <Typography component={'p'} align='justify' variant="body1" color="initial" >
                            {description}
                        </Typography>
                        <Typography component={'p'} align='justify' variant="body1" color="initial" >
                            {fullDescription}
                        </Typography>

                    </Box>

                </Stack>


                <Box pt={3}>
                    <Stack
                        direction={{ xs: "column", sm: 'column', md: 'row' }}
                        alignContent={"space-around"}
                        spacing={{ xs: 3, sm: 3, md: "auto", lg: 20 }}

                    >

                        <Box pl={5}  >
                            <Typography textTransform={"capitalize"} variant="h3" color="textSecondary">
                                program
                            </Typography>
                        </Box>
                        <Box
                            justifyContent={'ceter'}
                            alignItems={"center"}
                            alignContent={"center"}
                        >
                            <TableContainer
                                component={Paper}
                                placeholder='program'

                                sx={{ padding: 3 }}
                            >
                                <Table sx={{ width: { md: 600, lg: 650 }, maxHeight: 380, }} >
                                    <TableHead  >
                                        <TableRow>
                                            <TableCell >time</TableCell>
                                            <TableCell >activities</TableCell>
                                            <TableCell >description</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            false && program.map((prog, index) => <TableRow key={index}>
                                                <TableCell>{prog.time}</TableCell>
                                                <TableCell>{prog.activity}</TableCell>
                                                <TableCell>{prog.description}</TableCell>
                                            </TableRow>
                                            )
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Stack pt={2}
                                direction={'row-reverse'} spacing={2}
                            >
                                <Button variant='contained' color='thirdColor'  >
                                    download
                                </Button>
                                <Button variant='contained' onClick={() => setRegister(prev => !prev)}  >
                                    Take part
                                </Button>

                                {
                                    register && <RegisterationForm name={name} register={register} setRegister={setRegister} />
                                }
                            </Stack>
                        </Box>


                    </Stack>

                </Box >
            </Section >
        </>
    )
}
