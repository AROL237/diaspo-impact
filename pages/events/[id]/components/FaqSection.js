import React from 'react'
import { Section } from '../../../../components/Section'
import { Box, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

export default function FaqSection() {
    const questions = [{}, {}, {}]
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Section title={'FAQ'} titlePosition={'center'} color={"white"}
        >
            <Box
                sx={{
                    display: "flex", flexDirection: "column", gap: 2,
                    alignContent: 'space-around', justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                <Box p={2} minWidth={280}>
                    <Typography variant="subtitle1" textTransform={'uppercase'} color="textSecondary">
                        frequently ask questions and answers
                    </Typography>
                </Box >
                {
                    questions.map((quest, index) =>
                        <Accordion sx={{
                            bgcolor: '#F3F1F1', color: '#822813',
                            width: { xs: '100%', sm: '100%', md: 800 },
                            borderRadius: 4
                        }}
                            key={index}
                            expanded={expanded === "panel" + index}
                            onChange={handleChange("panel" + index)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-label="Expand"
                                aria-controls="-content"
                                id="-header"

                            >
                                <Box maxWidth={700}>

                                    <Typography fontSize={20} variant="body1" color="inherit">
                                        dskfjkldjfkl sdjf kldjfklfkds jfklsjakgj kgksajgklsj agk jsidj gfis djg uhsdugio sdj gklasj
                                        <Typography component="span" fontSize={21} fontWeight={"bold"} color=""> ?</Typography>
                                    </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Box>
                                    <Typography variant="subtitle1" color="initial">
                                        sdkfjsdkjgkls jdgkj sdkgj skjklf ajsklfja
                                    </Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    )
                }
            </Box>

        </Section >
    )
}
