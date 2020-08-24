import React, {useState} from 'react';
import { motion, transform } from 'framer-motion';
import SideRect from '../components/SideRect';
import '../styles/login.css'
import { NavLink } from 'react-router-dom';
import AuthLink from '../components/AuthLink';

const transition = { duration : 1}



const Login = () => {
    const [exit, setExit] = useState(
        {
            left: ['0%','100%'],
            transform: ['translate(0%)', 'translate(-100%)'],
            width:['30%','50%','30%']
        })

    const handleClose = () => {
        setExit({})
    }

    return (
        <div>
            <NavLink onClick={handleClose} to='/' className="page__close page__close_auth"></NavLink>
            <motion.div className='exit-login' 
                exit={exit} 
                transition={transition}
                >
                    <AuthLink link='/signup'>Sign Up</AuthLink>
            </motion.div>        
        </div>
)}

export default Login;
