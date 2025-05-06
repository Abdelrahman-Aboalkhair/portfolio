'use client'

import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;

}

export function Button({ children, className, ...props }: ButtonProps) {
    return (
        <motion.button
            // {...props}
            className={`px-6 py-2 rounded-lg text-white transition ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
}