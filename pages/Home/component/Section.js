import React from 'react'
import { Box, styled, Typography } from "@mui/material"

export const Section = ({ children, title, sx, color, titlePosition }) => {
    const TitleBox = styled(Typography)({
        marginLeft: "auto",
        marginRight: "auto",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '32px',
        paddingBottom: "30px",
    })
    return (
        <Box p={2} pb={5} sx={{
            bgcolor: color
        }}>
            <TitleBox align={titlePosition} px={5} variant='h3' textTransform={'Capitalize'} fontWeight={'bold'} >
                {title}
            </TitleBox>
            <Box sx={...sx}>
                {children}
            </Box>
        </Box>
    )
}
