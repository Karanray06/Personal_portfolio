"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [text, setText] = useState("kariexo");

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setText("Materializing shapes...");
        }, 1500);

        const timer2 = setTimeout(() => {
            setIsLoading(false);
        }, 3500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#f3f2f9] text-[#606887]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <motion.h1
                        key={text}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl md:text-4xl font-light uppercase tracking-widest"
                    >
                        {text}
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
