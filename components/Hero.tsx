'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center px-4 z-10"
            >
                <motion.div
                    className="mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Image
                        src="/avatar.png"
                        alt="Abdelrahman Aboalkhair"
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-accent mx-auto"
                    />
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Abdelrahman Aboalkhair
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                    Full-Stack Web Developer | AI & IoT Enthusiast
                </p>
                <a
                    href="https://drive.google.com/file/d/18FQKp9qgYcFPxLA6Y1VBZo9j_kOZM7Dt/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="bg-accent hover:bg-opacity-80">
                        Download Resume
                    </Button>
                </a>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 z-0" />
        </section>
    );
}