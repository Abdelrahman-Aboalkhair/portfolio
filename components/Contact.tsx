'use client'

import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "./ui/Button";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                alert("Message sent successfully!");
                reset();
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            alert("An error occurred.");
        }
    };

    return (
        <motion.section
            id="contact"
            className="py-16 px-4 bg-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg mx-auto space-y-4"
            >
                <div>
                    <label htmlFor="name" className="block mb-1">
                        Name
                    </label>
                    <input
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                    />
                    {errors.name && (
                        <p className="text-red-400 text-sm">{errors.name.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Invalid email address",
                            },
                        })}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-sm">{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register("message", { required: "Message is required" })}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                        rows={5}
                    />
                    {errors.message && (
                        <p className="text-red-400 text-sm">{errors.message.message}</p>
                    )}
                </div>
                <Button type="submit" className="bg-accent hover:bg-opacity-80">
                    Send Message
                </Button>
            </form>
        </motion.section>
    );
}