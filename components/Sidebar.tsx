'use client'

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
    {
        icon: <FaLinkedin className="text-2xl" />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/abdelrahman-aboalkhair-65771833b",
    },
    {
        icon: <FaGithub className="text-2xl" />,
        label: "GitHub",
        href: "https://github.com/Abdelrahman-Aboalkhair",
    },
];

export function Sidebar() {
    return (
        <motion.div
            className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col space-y-4 bg-gray-800 p-4 rounded-r-lg">
                {socialLinks.map((link, index) => (
                    <motion.div
                        key={index}
                        className="group relative"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent"
                        >
                            {link.icon}
                        </a>
                        <motion.span
                            className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        >
                            {link.label}
                        </motion.span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}