"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
    const [theme, setTheme] = useState<"default" | "dark" | "aesthetic">("default");
    const [menuOpen, setMenuOpen] = useState(false);

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

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setActiveSection(id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const getIcon = (item: string) => {
        switch (item) {
            case "Home":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                );
            case "Work":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                );
            case "About":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                );
            case "Contact":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                );
            default:
                return null;
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
            <div className="pointer-events-auto text-[#4A5068] dark:text-[#EDEDED] aesthetic:text-[#93B0AC]">
                <Link href="/" className="text-sm uppercase tracking-wider font-bold hover:underline">
                    kariexo / karan ray
                </Link>
            </div>

            {/* Top Right Controls: Theme | Menu */}
            <div className="fixed right-6 top-6 flex items-center gap-6 pointer-events-auto text-[#4A5068] dark:text-[#EDEDED] aesthetic:text-[#93B0AC]">

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
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                </button>
            </div>

            {/* App-like Navigation Menu - Grid Layout in Top Right */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="fixed right-6 top-20 grid grid-cols-2 gap-3 pointer-events-auto"
                >
                    {["Home", "Work", "About", "Contact"].map((item) => {
                        const isActive = activeSection === item.toLowerCase();
                        return (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="group relative"
                                onClick={(e) => {
                                    handleNavClick(e, item.toLowerCase());
                                    setMenuOpen(false);
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-lg ${isActive ? "ring-2 ring-offset-2 ring-offset-transparent" : ""
                                        }`}
                                    style={{
                                        backgroundColor: "var(--nav-bg)",
                                        color: "var(--nav-text)",
                                        boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
                                        borderColor: isActive ? "var(--nav-text)" : "transparent",
                                    }}
                                >
                                    {getIcon(item)}
                                </motion.div>
                            </Link>
                        );
                    })}
                </motion.div>
            )}

        </motion.nav>
    );
}
