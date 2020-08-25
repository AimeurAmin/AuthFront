import React, {useState} from 'react';
import { motion } from 'framer-motion';
import '../styles/login.css'
import { NavLink } from 'react-router-dom';
import AuthLink from '../components/AuthLink';

const transition = { duration : 1 }

const Signup = () => {
    const [exitAnimation, setExitAnimation] = useState({
        left: ['100%', '0%'],
        transform: ['translate(-100%)', 'translate(0%)'],
        width:['30%','70%','30%']
    })
    
    const handleClose = () => {
        setExitAnimation({})
    }

    return (
        <div style={{overflowX:'hidden'}}>
            <NavLink onClick={handleClose} to='/' class="page__close page__close_login"></NavLink>
            <motion.div 
                className=' exit-signup'
                exit={exitAnimation}
                transition={transition}
            >
                
                <AuthLink link='/login'>Sign In</AuthLink>
            </motion.div>


            <motion.div className='container-text-qst-auth'
                exit={{opacity:0}}
                transition={{duration:1}}
            >
                <motion.div
                    exit={{
                        transform:['transform:translateX(-100%)','translateX(0)']
                    }}
                    transition={{duration:1}}
                >
                    <h1>New Here?</h1>
                    <p>Sign up and discover a great </p>
                    <p>amount of new opportunities!</p>
                </motion.div>
            </motion.div>


            {/* <motion.h1
                    exit={{
                            left: '110%'}}
                    transition={{ease: "easeOut", duration:1
                    }}
                    style={{
                        color: 'white',
                        width: '100%',
                        position: 'fixed',
                        top: '45%',
                        left: '85%',
                        transform: 'translate(-50%, -100%)',
                        fontSize: '2.125rem'
                    }}
                >
                    <motion.h3
                        exit={{opacity:0}}
                        transition={{duration:.3}}
                    >New Here?</motion.h3>
            </motion.h1> */}
        </div>
)}

export default Signup;
