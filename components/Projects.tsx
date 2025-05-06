'use client'

import { motion } from "framer-motion";
import { fetchProjects } from "@/lib/prisma";
import { Card } from "./ui/Card";

export async function Projects() {
    // const projects = await fetchProjects();

    const projects = [{
        id: 1,
        title: "Project 1",
        description: "Description of Project 1",
        tech: ["Tech 1", "Tech 2", "Tech 3"],
        github: "https://github.com/username/project1",
    }]

    return (
        <motion.section
            id="projects"
            className="py-16 px-4 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <p className="text-sm text-gray-400 mb-2">
                                Tech: {project.tech}
                            </p>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:underline"
                            >
                                View on GitHub
                            </a>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}