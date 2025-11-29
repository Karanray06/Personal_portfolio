"use client";
import { motion } from "framer-motion";

export default function Contact() {
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
        <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 py-24 relative z-10" id="contact">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full max-w-4xl mx-auto"
            >
                <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-16 text-[#606887]">
                    Get In Touch
                </motion.h2>

                <motion.p variants={item} className="text-xl md:text-2xl leading-relaxed mb-12 opacity-90">
                    {"I'm always open to new opportunities and collaborations. Feel free to reach out!"}
                </motion.p>

                <motion.div variants={item} className="flex flex-col gap-6">
                    <a
                        href="mailto:2006karanray@gmail.com"
                        className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
                    >
                        → Email
                    </a>
                    <a
                        href="https://github.com/Karanray06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
                    >
                        → GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/karan-ray-370150351/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
                    >
                        → LinkedIn
                    </a>
                    <a
                        href="https://www.instagram.com/karanray06/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
                    >
                        → Instagram
                    </a>
                    <a
                        href="https://twitter.com/karanray06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
                    >
                        → Twitter
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
