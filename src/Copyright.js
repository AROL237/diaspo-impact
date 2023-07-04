import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
    return (
        <Typography p={1} variant="body1" color="inherit" align="center" >
            {'Copyright © '}
            <MuiLink color="inherit" href="#">
                SNA_TECH
            </MuiLink>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}