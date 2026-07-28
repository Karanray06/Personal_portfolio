"use client";
import { motion } from "framer-motion";
import { BrandMark } from "../brand/BrandMark";

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
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
    };

    return (
        <section id="contact" className="min-h-[70vh] flex flex-col justify-center items-center px-6 md:px-12 py-24 relative z-10 bg-[var(--bg-dark)] text-[var(--text-on-dark)] overflow-hidden">
            
            {/* Background Blob */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                    className="absolute inset-0 overflow-hidden pointer-events-none opacity-5"
                >
                    <BrandMark variant="dark-bg" className="w-full h-full scale-150" />
                </motion.div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
            >
                <div className="flex justify-center mb-12">
                    <BrandMark variant="mono" className="w-16 h-16 text-[var(--accent-muted)]" />
                </div>

                <motion.h2 variants={item} className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">
                    Let's create <br/> something <span className="holo-gradient-text">unpredictable</span>.
                </motion.h2>

                <motion.div variants={item} className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
                    {[
                        { name: 'Email', url: 'mailto:2006karanray@gmail.com' },
                        { name: 'GitHub', url: 'https://github.com/Karanray06' },
                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/karan-ray-370150351/' },
                        { name: 'Instagram', url: 'https://www.instagram.com/karanray06/' },
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative text-lg md:text-xl font-bold lowercase text-[var(--text-on-dark)] hover:text-[var(--springgreen)] transition-colors"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[var(--springgreen)] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
