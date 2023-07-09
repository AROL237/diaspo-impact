import React from 'react'
import { Box, styled, Typography } from "@mui/material"

export const Section = ({ children, title, sx, color, titlePosition, titleTextColor, id }) => {
    const TitleBox = styled(Typography)({
        marginLeft: "auto",
        marginRight: "auto",
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '25px',
        paddingBottom: "30px",
    })
    return (
        <Box p={2} pb={5} id={id} sx={{
            bgcolor: color
        }}>
            <TitleBox align={titlePosition} color={titleTextColor || "inherit"}
                px={5} variant='h4' textTransform={'Capitalize'} fontWeight={'bold'} >
                {title}
            </TitleBox>
            <Box sx={...sx}>
                {children}
            </Box>
        </Box>
    )
}
