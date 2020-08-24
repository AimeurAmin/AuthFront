import React from 'react';
import { motion, transform } from 'framer-motion';
import '../styles/login.css'
import { NavLink } from 'react-router-dom';

const transition = { duration : 1 }

const Signup = () => (
    <div>
        <motion.div 
            className=' exit-signup'
            exit={{ 
                left: ['100%', '0%'],
                transform: ['translate(-100%)', 'translate(0%)'],
                width:['30%','50%','30%']
            }}

            transition={transition}
        >
            <NavLink to='/login' exact className='link-go-to'>
                <motion.h3
                    exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: .5}}
                >
                    Sign In
                </motion.h3>
            </NavLink>
        </motion.div>
    </div>
)

export default Signup;
