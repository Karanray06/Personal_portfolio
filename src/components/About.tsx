"use client";
import { motion } from "framer-motion";
import { BlobShape } from "../brand/Blobs";

export default function About() {
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
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
    };

    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-24 relative z-10 bg-[var(--bg-dark)]">
            
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="w-full max-w-6xl mx-auto"
            >
                {/* Light Card Container */}
                <div className="relative bg-[var(--bg-light)] text-[var(--text-on-light)] rounded-[2rem] overflow-hidden shadow-2xl p-8 md:p-16">
                    
                    {/* Soft blurred color-wash gradients behind text block */}
                    <div className="absolute inset-0 pointer-events-none opacity-40">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--flamingo)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--azure)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[var(--springgreen)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 items-center">
                        
                        {/* Text Block */}
                        <div className="flex flex-col items-start">
                            <motion.h2 variants={item} className="text-sm font-bold tracking-widest uppercase mb-4 text-[var(--accent-muted)]">
                                About Me
                            </motion.h2>

                            <motion.div variants={item} className="mb-8">
                                <h3 className="text-4xl md:text-5xl font-black mb-6 lowercase tracking-tight">
                                    I build productivity tools <br/> & AI-driven web apps.
                                </h3>
                                
                                <p className="text-lg md:text-xl leading-relaxed mb-6 font-medium">
                                    Full-stack dev — Next.js, TypeScript, React. <br />
                                    B.Tech CSE student exploring the intersection of design and technology to build software that not only works perfectly but also looks beautiful.
                                </p>
                            </motion.div>

                            <motion.div variants={item} className="flex gap-6 mt-4">
                                <a
                                    href="https://github.com/Karanray06"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 text-lg font-bold hover:text-[var(--azure)] transition-colors lowercase"
                                >
                                    <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
                                        ↗
                                    </span>
                                    github
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/karan-ray-370150351/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 text-lg font-bold hover:text-[var(--azure)] transition-colors lowercase"
                                >
                                    <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center">
                                        ↗
                                    </span>
                                    linkedin
                                </a>
                            </motion.div>
                        </div>

                        {/* Portrait Frame */}
                        <motion.div variants={item} className="w-full flex justify-center md:justify-end">
                            <div className="relative w-full max-w-[300px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-[var(--bg-dark-card)] p-2">
                                <div className="absolute inset-0 holo-gradient opacity-20"></div>
                                {/* In lieu of a real photo, we use a placeholder that matches the brand or leave space for the user's photo */}
                                <div className="w-full h-full rounded-[1.5rem] bg-[var(--bg-dark)] flex items-center justify-center relative overflow-hidden">
                                   <BlobShape shape="kidney" variant="ghost" className="absolute w-64 h-64 text-white" />
                                   <p className="text-[var(--text-on-dark)] font-bold opacity-30 rotate-[-10deg] absolute">PORTRAIT PHOTO</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}
