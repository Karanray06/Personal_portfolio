"use client";
import { motion } from "framer-motion";

interface Project {
    number: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
}

const projects: Project[] = [
    {
        number: "01",
        title: "Resume Builder",
        description: "Professional resume creation platform with real-time preview and ATS optimization.",
        tags: ["React", "TypeScript"],
        link: "https://karanray06.github.io/Resume_Builder-/"
    },
    {
        number: "02",
        title: "GDG JISU",
        description: "Community platform for Google Developer Group at JIS University.",
        tags: ["HTML/CSS", "JavaScript"],
        link: "https://karanray06.github.io/GDG_JISU/"
    }
];

export default function Work() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" as any } },
    };

    return (
        <section className="min-h-screen flex flex-col justify-start items-start px-6 md:px-12 py-24 relative z-10" id="work">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full max-w-6xl mx-auto"
            >
                <motion.h2 variants={item} className="text-4xl md:text-5xl font-extrabold mb-16 text-[#1a1a1a]">
                    Selected Work
                </motion.h2>

                <div className="space-y-12">
                    {projects.map((project) => (
                        <motion.div
                            key={project.number}
                            variants={item}
                            className="border-t border-[#606887]/20 pt-8"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="text-2xl font-light opacity-50 w-16">{project.number}</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#1a1a1a]">{project.title}</h3>
                                    <p className="text-lg mb-6 opacity-80">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-4 py-2 border border-[#606887]/30 rounded-full text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
                                    >
                                        → View Project
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
