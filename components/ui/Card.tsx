'use client'

import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <motion.div
            // {...props}
            className={`bg-gray-800 rounded-lg shadow-lg ${className}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}