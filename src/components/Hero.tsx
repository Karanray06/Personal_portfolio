"use client";
import { motion } from "framer-motion";

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 3.5, // Wait for preloader
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" as any } },
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative z-10 pointer-events-none">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-4xl mx-auto pointer-events-auto"
            >
                <motion.p variants={item} className="text-lg md:text-xl mb-2 font-medium">
                    {"Hey, I'm"}
                </motion.p>

                <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-2 text-[#606887]">
                    Karan Ray
                </motion.h1>

                <motion.p variants={item} className="text-lg md:text-xl mb-6 font-medium italic opacity-80">
                    But you can call me
                </motion.p>

                <motion.h2 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-[#606887]">
                    kariexo
                </motion.h2>

                <motion.p variants={item} className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
                    {"I'm a developer & tech innovator"}
                </motion.p>

                <motion.div variants={item} className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <a href="#work" className="group flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity">
                        <span className="w-8 h-8 rounded-full border border-[#606887] flex items-center justify-center group-hover:bg-[#606887] group-hover:text-white transition-colors">
                            →
                        </span>
                        See my projects
                    </a>
                    <a href="#about" className="group flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity">
                        <span className="w-8 h-8 rounded-full border border-[#606887] flex items-center justify-center group-hover:bg-[#606887] group-hover:text-white transition-colors">
                            →
                        </span>
                        More about me
                    </a>
                </motion.div>

                <motion.div variants={item} className="absolute bottom-10 right-10 flex flex-col gap-2 text-right hidden md:flex">
                    <a href="https://github.com/Karanray06" target="_blank" rel="noopener noreferrer" className="hover:underline">↗ GitHub</a>
                    <a href="mailto:2006karanray@gmail.com" className="hover:underline">↗ Email</a>
                </motion.div>
            </motion.div>
        </section>
    );
}
