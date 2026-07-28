"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrandMark } from "../brand/BrandMark";
import { BlobShape } from "../brand/Blobs";

interface HeroProps {
    setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

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
            
            {/* Abstract Background Shapes (Blurred / Low Opacity) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[800px] h-[800px] -mr-40 -mt-20 opacity-[0.15] blur-2xl">
                    <BrandMark variant="light-bg" className="w-full h-full scale-150" />
                </motion.div>
                <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[600px] h-[600px] -ml-20 -mb-20 opacity-[0.15] blur-3xl">
                    <BrandMark variant="dark-bg" className="w-full h-full scale-150 rotate-180" />
                </motion.div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-5xl mx-auto w-full z-10 pt-20"
            >
                {/* Brand Mark */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <BrandMark variant="dark-bg" className="w-24 h-24" />
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
