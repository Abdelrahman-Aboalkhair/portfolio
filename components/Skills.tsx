'use client'

import { motion } from "framer-motion";
import { fetchSkills } from "@/lib/prisma";

export async function Skills() {
    // const skills = await fetchSkills();
    const skills = [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
        { id: 4, name: "TypeScript" },
        { id: 5, name: "React" },
        { id: 6, name: "Next.js" },
        { id: 7, name: "Tailwind CSS" },
        { id: 8, name: "Prisma" },
        { id: 9, name: "MongoDB" },
        { id: 10, name: "Node.js" },
    ]

    return (
        <motion.section
            id="skills"
            className="py-16 px-4 bg-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        className="bg-gray-700 p-4 rounded-lg text-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {skill.name}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}