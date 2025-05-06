'use client'

import { motion } from "framer-motion";

export function About() {
    return (
        <motion.section
            id="about"
            className="py-16 px-4 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg">
                I'm an 18-year-old Egyptian full-stack web developer passionate about
                building scalable, high-performance systems. As a self-taught high
                schooler, I specialize in integrating AI, machine learning, and 3D models
                into innovative web applications. My goal is to master IoT, blending
                electronics with AI-driven solutions.
            </p>
        </motion.section>
    );
}