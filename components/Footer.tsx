'use client'

import { motion } from "framer-motion";

export function Footer() {
    return (
        <motion.footer
            className="py-8 px-4 bg-gray-900 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <p>
                © {new Date().getFullYear()} Abdelrahman Aboalkhair. All rights
                reserved.
            </p>
        </motion.footer>
    );
}