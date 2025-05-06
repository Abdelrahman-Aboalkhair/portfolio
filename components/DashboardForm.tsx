"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Skill, Project } from "@/lib/types";

type DashboardFormProps = {
    skills: Skill[];
    projects: Project[];
};

type SkillFormData = { name: string };
type ProjectFormData = { title: string; description: string; tech: string; github: string };

export function DashboardForm({ skills, projects }: DashboardFormProps) {
    const { register: registerSkill, handleSubmit: handleSkillSubmit, reset: resetSkill } = useForm<SkillFormData>();
    const { register: registerProject, handleSubmit: handleProjectSubmit, reset: resetProject } = useForm<ProjectFormData>();

    const onSkillSubmit: SubmitHandler<SkillFormData> = async (data) => {
        await fetch("/api/skills", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        resetSkill();
    };

    const onProjectSubmit: SubmitHandler<ProjectFormData> = async (data) => {
        await fetch("/api/projects", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        resetProject();
    };

    const deleteSkill = async (id: number) => {
        await fetch(`/api/skills?id=${id}`, { method: "DELETE" });
    };

    const deleteProject = async (id: number) => {
        await fetch(`/api/projects?id=${id}`, { method: "DELETE" });
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">Manage Skills</h2>
                <form onSubmit={handleSkillSubmit(onSkillSubmit)} className="space-y-4 mb-6">
                    <div>
                        <label htmlFor="skill-name" className="block mb-1">Skill Name</label>
                        <input
                            id="skill-name"
                            {...registerSkill("name", { required: true })}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-accent rounded">Add Skill</button>
                </form>
                <ul className="space-y-2">
                    {skills.map((skill) => (
                        <li key={skill.id} className="flex justify-between items-center bg-gray-700 p-2 rounded">
                            <span>{skill.name}</span>
                            <button onClick={() => deleteSkill(skill.id)} className="text-red-400">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Manage Projects</h2>
                <form onSubmit={handleProjectSubmit(onProjectSubmit)} className="space-y-4 mb-6">
                    <div>
                        <label htmlFor="project-title" className="block mb-1">Title</label>
                        <input
                            id="project-title"
                            {...registerProject("title", { required: true })}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="project-description" className="block mb-1">Description</label>
                        <textarea
                            id="project-description"
                            {...registerProject("description", { required: true })}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            rows={3}
                        />
                    </div>
                    <div>
                        <label htmlFor="project-tech" className="block mb-1">Tech</label>
                        <input
                            id="project-tech"
                            {...registerProject("tech", { required: true })}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="project-github" className="block mb-1">GitHub URL</label>
                        <input
                            id="project-github"
                            {...registerProject("github", { required: true })}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-accent rounded">Add Project</button>
                </form>
                <ul className="space-y-2">
                    {projects.map((project) => (
                        <li key={project.id} className="flex justify-between items-center bg-gray-700 p-2 rounded">
                            <span>{project.title}</span>
                            <button onClick={() => deleteProject(project.id)} className="text-red-400">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}