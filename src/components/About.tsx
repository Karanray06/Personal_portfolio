"use client";
import { motion } from "framer-motion";

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
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" as any } },
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 py-24 relative z-10" id="about">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full max-w-4xl mx-auto"
            >
                <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-16 text-[#606887]">
                    About Me
                </motion.h2>

                <motion.p variants={item} className="text-xl md:text-2xl leading-relaxed mb-12 opacity-90">
                    {"I'm a B.Tech Computer Science student at JIS University with a passion for building modern web applications."}
                </motion.p>

                <motion.div variants={item} className="flex flex-col gap-6">
                    <a
                        href="mailto:2006karanray@gmail.com"
                        className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
                    >
                        → Email Me
                    </a>
                    <a
                        href="https://github.com/Karanray06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
                    >
                        → GitHub
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
