import React from 'react';
import { motion, transform } from 'framer-motion';
import SideRect from '../components/SideRect';
import '../styles/login.css'
import { NavLink } from 'react-router-dom';

const transition = { duration : 1}

const Login = () => (
    <div>
        <motion.div className=' exit-login' 
            exit={{
                left: ['0%','100%'],
                transform: ['translate(0%)', 'translate(-100%)'],
                width:['30%','50%','30%']
            }} 
            transition={transition}
            >
                <NavLink to='/signup' exact className='link-go-to'>
                    <motion.h3
                        exit={{opacity:0}}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration: .5}}
                    >
                        Sign Up
                    </motion.h3>
                </NavLink>
        </motion.div>        
    </div>
)

export default Login;
