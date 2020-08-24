import React from 'react';
import { motion } from 'framer-motion';
import '../styles/login.css'
import { NavLink } from 'react-router-dom';

const AuthLink = (props) => (
    <div>
        <NavLink to={props.link} exact className='link-go-to'>
            <motion.h3
                exit={{opacity:0}}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: .5}}
            >
                {props.children}
            </motion.h3>
        </NavLink>
    </div>
)

export default AuthLink;