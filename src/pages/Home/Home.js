import React from 'react';
import {Box} from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import bgPic from '../../assests/home-background.jpg'

const Home = () => {
    return (
        <Box sx={{minHeight: '100vh',backgroundSize: 'cover', opacity: '0.9', backgroundImage: `url(${bgPic})`, width: '100%'}}>
<NavBar/>
        </Box>
    );
};

export default Home;
