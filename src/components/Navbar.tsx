"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none"
        >
            {/* Brand */}
            <div className="pointer-events-auto">
                <Link href="/" className="text-sm uppercase tracking-wider font-medium hover:underline">
                    kariex / karan ray
                </Link>
            </div>

            {/* Language Toggle */}
            <div className="pointer-events-auto flex gap-2 text-sm font-medium uppercase">
                <span className="opacity-50">FR</span>
                <span>/</span>
                <span className="underline">EN</span>
            </div>

            {/* Menu (Simplified for now, can be expanded) */}
            <div className="fixed right-6 top-20 flex flex-col items-end gap-2 pointer-events-auto">
                {["Home", "Work", "About", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm uppercase tracking-wider hover:underline"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
}
