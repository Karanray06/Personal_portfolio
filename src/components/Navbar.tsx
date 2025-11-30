"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [theme, setTheme] = useState<"default" | "dark" | "aesthetic">("default");

    // Theme Toggle Logic
    useEffect(() => {
        // Check local storage or system preference on mount
        const savedTheme = localStorage.getItem("theme") as "default" | "dark" | "aesthetic" | null;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        // Apply theme classes to body
        document.body.classList.remove("dark", "aesthetic");
        if (theme === "dark") document.body.classList.add("dark");
        if (theme === "aesthetic") document.body.classList.add("aesthetic");

        // Save to local storage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => {
            if (prev === "default") return "dark";
            if (prev === "dark") return "aesthetic";
            return "default";
        });
    };

    // Scroll Spy Logic
    useEffect(() => {
        const sections = ["home", "work", "about", "contact"];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-start pointer-events-none"
        >
            {/* Brand */}
            <div className="pointer-events-auto mix-blend-difference text-white">
                <Link href="/" className="text-sm uppercase tracking-wider font-medium hover:underline">
                    kariexo / karan ray
                </Link>
            </div>

            {/* Top Right Controls: Language | Theme | Menu */}
            <div className="fixed right-6 top-6 flex items-center gap-6 pointer-events-auto mix-blend-difference text-white">
                {/* Language Toggle */}
                <div className="flex gap-2 text-sm font-medium uppercase">
                    <span className="opacity-50">FR</span>
                    <span>/</span>
                    <span className="underline">EN</span>
                </div>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Toggle Theme"
                >
                    {theme === "default" && (
                        // Sun Icon (Default -> Dark)
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    )}
                    {theme === "dark" && (
                        // Moon Icon (Dark -> Aesthetic)
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                    {theme === "aesthetic" && (
                        // Sparkles/Star Icon (Aesthetic -> Default)
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                        </svg>
                    )}
                </button>

                {/* Menu Grid Icon */}
                <button className="hover:opacity-70 transition-opacity" aria-label="Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                </button>
            </div>

            {/* App-like Navigation Menu */}
            <div className="fixed left-1/2 -translate-x-1/2 bottom-8 flex items-center gap-4 pointer-events-auto">
                {["Home", "Work", "About", "Contact"].map((item) => {
                    const isActive = activeSection === item.toLowerCase();
                    return (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="group relative flex flex-col items-center gap-1"
                            onClick={(e) => handleNavClick(e, item.toLowerCase())}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md ${isActive ? "ring-2 ring-offset-2 ring-offset-transparent" : ""
                                    }`}
                                style={{
                                    backgroundColor: "var(--nav-bg)",
                                    color: "var(--nav-text)",
                                    boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
                                    borderColor: isActive ? "var(--nav-text)" : "transparent",
                                }}
                            >
                                <span className="font-extrabold text-[10px] uppercase tracking-tight">
                                    {item}
                                </span>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}
