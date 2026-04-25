'use client'

import { motion } from 'framer-motion';

export default function PopScale({ children, className = '' }) {
    return (
        <motion.div
            className={className}
            whileHover={{
                scale: 1.05, 
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10    
                }
            }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.div>
    );
}