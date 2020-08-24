import React, {useState} from 'react';
import { motion } from 'framer-motion';
import '../styles/login.css';
import '../styles/authLink.css';
import { NavLink } from 'react-router-dom';

const AuthLink = (props) => {
    // const exitAnimation = props.exitAnimation ? {opacity:0} : {}
    return (
            <NavLink to={props.link}  className='link-go-to image-container-btn'>
                <motion.h3
                    exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: .5}}
                    className='text-auth-btn'
                >
                    {props.children}
                </motion.h3>
            </NavLink>
    )}

export default AuthLink;