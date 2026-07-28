"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Monogram } from "../brand/Monogram";

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setActiveSection(id);
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navItems = [
        { name: "Home", id: "home", number: "01" },
        { name: "Work", id: "work", number: "02" },
        { name: "About", id: "about", number: "03" },
        { name: "Contact", id: "contact", number: "04" },
    ];

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none"
            >
                {/* Brand Logo - Top Left */}
                <div className="pointer-events-auto">
                    <Link href="/" onClick={(e) => handleNavClick(e, 'home')}>
                        <Monogram layout="compact" variant="glass" className="w-10 h-10 hover:opacity-80 transition-opacity" />
                    </Link>
                </div>

                {/* Hamburger Menu - Top Right */}
                <div className="pointer-events-auto">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="group relative w-12 h-12 rounded-full border border-[var(--accent-muted)]/30 backdrop-blur-sm bg-[var(--bg-dark-card)]/50 flex flex-col items-center justify-center gap-1.5 hover:border-[var(--azure)] transition-colors z-50"
                        aria-label="Toggle Menu"
                    >
                        <span className={`block w-5 h-0.5 bg-[var(--text-on-dark)] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-[var(--text-on-dark)] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-[var(--text-on-dark)] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </motion.nav>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
                        animate={{ opacity: 1, clipPath: 'circle(150% at right top)' }}
                        exit={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-[var(--bg-dark)]/95 backdrop-blur-xl flex items-center justify-center"
                    >
                        {/* Background subtle scatter for menu */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                            <Monogram layout="scattered" variant="outlineGlow" className="w-full h-full scale-150 rotate-45" />
                        </div>

                        <div className="flex flex-col gap-8 text-center relative z-10 w-full max-w-md px-6">
                            {navItems.map((item, i) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                    >
                                        <Link
                                            href={`#${item.id}`}
                                            className="group flex items-baseline justify-between w-full"
                                            onClick={(e) => handleNavClick(e, item.id)}
                                        >
                                            <span className="text-[var(--accent-muted)] text-sm font-medium">
                                                {item.number}
                                            </span>
                                            
                                            <span className={`text-4xl md:text-6xl uppercase tracking-wider transition-all duration-300 font-bold
                                                ${isActive ? 'holo-gradient-text' : 'text-[var(--text-on-dark)] group-hover:text-[var(--azure)]'}
                                            `}>
                                                {item.name}
                                            </span>
                                        </Link>
                                        <div className="w-full h-[1px] bg-[var(--accent-muted)]/20 mt-4" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
