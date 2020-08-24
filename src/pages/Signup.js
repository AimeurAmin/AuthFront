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
        <div>
            <NavLink onClick={handleClose} to='/' class="page__close page__close_login"></NavLink>
            <motion.div 
                className=' exit-signup'
                exit={exitAnimation}
                transition={transition}
            >
                <AuthLink link='/login'>Sign In</AuthLink>
            </motion.div>
        </div>
)}

export default Signup;
