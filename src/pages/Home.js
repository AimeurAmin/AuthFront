import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => (
    <motion.div exit={{}}>
        <h1>Home</h1>
        <NavLink to='/login'><h3>Sign Up</h3></NavLink>
        <NavLink to='/signup'><h3>Sign In</h3></NavLink>
    </motion.div>
)

export default Home;