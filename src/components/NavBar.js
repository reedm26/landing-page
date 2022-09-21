import React from 'react';
import {Box, Breadcrumbs} from "@mui/material";


const NavBar = () => {
    return (
        <Box display="flex" justifyContent='space-between'>
            <Box alignSelf="center" m={2} >MR</Box>
            <Box pr={1}>
                <Breadcrumbs aria-label="breadcrumb">
                    <h4 >Home</h4>
                    <h4>About</h4>
                    <h4>Contact Me</h4>
                </Breadcrumbs>
            </Box>
        </Box>
    );
};

export default NavBar;
