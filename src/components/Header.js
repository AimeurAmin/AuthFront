import React from 'react';
import '../styles/header.css';
import { NavLink, BrowserRouter } from 'react-router-dom';
import {motion} from 'framer-motion';


const Header = (props) => (
    <div>
        <NavLink to='/login' className='link-header' activeClassName='current-link-header'><motion.div whileHover={{ color: 'red'}}>login</motion.div></NavLink>
        <NavLink to='/signup' className='link-header' activeClassName='current-link-header'><motion.div whileHover={{ color: 'red'}}>signup</motion.div></NavLink>
    </div>
)

export default Header;