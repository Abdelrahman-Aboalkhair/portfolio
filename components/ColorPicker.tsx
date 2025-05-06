"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const colors = [
    { name: "olive", class: "accent-olive", label: "Olive Green" },
    { name: "indigo", class: "accent-indigo", label: "Indigo" },
    { name: "reddish", class: "accent-reddish", label: "Reddish" },
];

export function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState(colors[1].class); // Default: Indigo

    useEffect(() => {
        document.documentElement.classList.remove(...colors.map(c => c.class));
        document.documentElement.classList.add(selectedColor);
    }, [selectedColor]);

    return (
        <motion.div
            className="fixed top-4 right-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex space-x-2 bg-gray-800 p-2 rounded-lg">
                {colors.map((color) => (
                    <motion.button
                        key={color.name}
                        className={`w-6 h-6 rounded-full ${color.class} ${selectedColor === color.class ? "ring-2 ring-white" : ""
                            }`}
                        onClick={() => setSelectedColor(color.class)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        title={color.label}
                    />
                ))}
            </div>
        </motion.div>
    );
}