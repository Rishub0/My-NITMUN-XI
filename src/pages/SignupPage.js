import React from 'react';
import Form from '../components/Form/Form';
import Formc from '../components/Forrm/Forrm';
import Navbar from '../components/Navbar/Navbar';
import Time from '../components/Time/Time';
import { motion } from 'framer-motion/dist/framer-motion'; 
const SignupPage = () => {
	return (
		
		<motion.div
		initial={{width: 0}}
		animate={{width: "100vw"}}
		exit={{ x: window.innerWidth, transition: {duration: 0.2} }}>
	    <Navbar />
		<Time/>
		<Formc />
		</motion.div>
	);
};

export default SignupPage;
