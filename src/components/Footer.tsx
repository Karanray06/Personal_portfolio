"use client";

export default function Footer() {
    return (
        <footer className="w-full py-8 px-6 flex justify-center items-center text-sm bg-[var(--bg-dark)] text-[var(--accent-muted)] border-t border-[var(--accent-muted)]/10">
            <p>Designed & built by Karan Ray © {new Date().getFullYear()}</p>
        </footer>
    );
}
