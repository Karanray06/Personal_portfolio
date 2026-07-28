"use client";
import { motion } from "framer-motion";
import { Monogram } from "../brand/Monogram";
import { BlobShape } from "../brand/Blobs";

interface HeroProps {
    setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
    };

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative z-10 overflow-hidden bg-[var(--bg-dark)] text-[var(--text-on-dark)]">
            
            {/* Background Texture & Bleeding Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-20 blur-3xl"
                >
                    <Monogram layout="scattered" variant="solid" className="w-full h-full scale-150" />
                </motion.div>
                <motion.div 
                    animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="absolute -bottom-32 -right-32 w-[600px] h-[600px] opacity-20 blur-3xl"
                >
                    <Monogram layout="scattered" variant="solid" className="w-full h-full scale-150 rotate-180" />
                </motion.div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-5xl mx-auto w-full z-10 pt-20"
            >
                {/* Monogram Mark */}
                <motion.div variants={item} className="mb-12">
                    <Monogram layout="compact" variant="glass" className="w-24 h-24" />
                </motion.div>

                {/* Headline */}
                <motion.div variants={item} className="flex flex-col gap-2 mb-8 uppercase">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9]">
                        HEY, I'M
                        <br />
                        Karan Ray
                    </h1>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
                        BUT YOU CAN CALL ME <span className="holo-gradient-text">kariexo</span>
                    </h2>
                </motion.div>

                {/* Subtitle */}
                <motion.p variants={item} className="text-xl md:text-2xl mb-12 font-medium opacity-80 lowercase">
                    Full-stack developer & AI engineer
                </motion.p>

                {/* CTAs */}
                <motion.div variants={item} className="flex flex-col sm:flex-row gap-6 lowercase">
                    <button
                        onClick={() => {
                            setActiveSection("work");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="group relative px-8 py-4 rounded-3xl font-medium text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--azure)]/20 border border-[var(--accent-muted)]/30 backdrop-blur-sm bg-white/5"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            → see my projects
                        </span>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 holo-gradient"></div>
                    </button>
                    
                    <button
                        onClick={() => {
                            setActiveSection("about");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="group relative px-8 py-4 rounded-3xl font-medium text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--flamingo)]/20 border border-[var(--accent-muted)]/30 backdrop-blur-sm bg-white/5"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            → more about me
                        </span>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 holo-gradient"></div>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
