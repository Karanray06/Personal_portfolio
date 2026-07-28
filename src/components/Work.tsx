"use client";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    color: string;
}

const projects: Project[] = [
    {
        title: "Kareixo",
        description: "AI coding agent platform",
        tags: ["Next.js", "TypeScript", "AI"],
        link: "https://github.com/karanray06",
        color: "var(--flamingo)"
    },
    {
        title: "Personal Portfolio",
        description: "Holographic brand system portfolio",
        tags: ["React", "TypeScript", "Framer Motion"],
        link: "https://karanray06.github.io/Personal_portfolio",
        color: "var(--azure)"
    },
    {
        title: "Resume Builder",
        description: "AI-powered professional resume creation",
        tags: ["React", "TypeScript", "AI"],
        link: "https://karanray06.github.io/Resume_Builder-/",
        color: "var(--springgreen)"
    },
    {
        title: "GDG JISU",
        description: "Community platform for Google Developer Group",
        tags: ["HTML/CSS", "JavaScript"],
        link: "https://karanray06.github.io/GDG_JISU/",
        color: "var(--lime)"
    },
    {
        title: "chat.elixpo",
        description: "MOE AI chat platform",
        tags: ["Next.js", "AI", "TypeScript"],
        link: "https://github.com/karanray06",
        color: "var(--flamingo)"
    },
    {
        title: "search.elixpo",
        description: "LLM-supported search engine",
        tags: ["Next.js", "AI", "TypeScript"],
        link: "https://github.com/karanray06",
        color: "var(--azure)"
    },
    {
        title: "SnapLink",
        description: "High-performance URL shortener",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        link: "https://github.com/karanray06",
        color: "var(--springgreen)"
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
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
    };

    return (
        <section id="work" className="min-h-screen flex flex-col justify-start items-center px-6 md:px-12 py-32 relative z-10 bg-[var(--bg-dark)]">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="w-full max-w-7xl mx-auto"
            >
                <motion.h2 variants={item} className="text-sm font-bold tracking-widest uppercase mb-16 text-[var(--accent-muted)] text-center md:text-left">
                    Selected Work
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={idx}
                            variants={item}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col bg-[var(--bg-dark-card)] rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[var(--accent-muted)]/20"
                        >
                            {/* Project Cover */}
                            <div className="relative h-48 w-full p-6 flex flex-col justify-between overflow-hidden">
                                {/* Base Gradient */}
                                <div 
                                    className="absolute inset-0 opacity-80 mix-blend-overlay transition-transform duration-500 group-hover:scale-110"
                                    style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
                                />
                                {/* Overlay pattern */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-20" />
                                
                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="w-10 h-10 rounded-full bg-[var(--bg-dark)]/50 backdrop-blur-md flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                        ↗
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold mb-2 text-[var(--text-on-dark)] group-hover:text-[var(--azure)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--text-on-dark)] opacity-70 mb-6 flex-1">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-dark)]/50 text-[var(--accent-muted)] border border-[var(--accent-muted)]/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
