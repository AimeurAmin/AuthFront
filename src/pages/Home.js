import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const Home = () => (
    <motion.div exit={{}}>
        <h1>Home</h1>
        <Header />
    </motion.div>
)

export default Home;