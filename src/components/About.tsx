"use client";
import { motion } from "framer-motion";
import HolographicImage from "./HolographicImage";

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

    const imageAnim = {
        hidden: { opacity: 0, scale: 0.8 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" as any, delay: 0.4 }
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-24 relative z-10" id="about">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-center"
            >
                {/* Left Column: Text */}
                <div className="flex flex-col items-start">
                    <motion.h2 variants={item} className="text-4xl md:text-5xl font-extrabold mb-12 text-[#606887]">
                        About Me
                    </motion.h2>

                    <motion.p variants={item} className="text-xl md:text-2xl leading-relaxed mb-8 opacity-90">
                        {"I'm a B.Tech Computer Science student at JIS University with a passion for building modern web applications."}
                    </motion.p>

                    <motion.p variants={item} className="text-lg md:text-xl leading-relaxed mb-12 opacity-80">
                        {"I specialize in creating interactive, high-performance digital experiences. My journey involves exploring the intersection of design and technology to build software that not only works perfectly but also looks beautiful."}
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col gap-4">
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
                </div>

                {/* Right Column: Holographic Image */}
                <motion.div variants={imageAnim} className="w-full flex justify-center md:justify-end">
                    <HolographicImage />
                </motion.div>
            </motion.div>
        </section>
    );
}
