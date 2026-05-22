"use client";

import styles from "../css/Navbar.module.css";
import { Home, User, Code, Flag, File, Moon, IceCreamCone, Palette } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <NavButtons></NavButtons>
        <ModeSwitcher></ModeSwitcher>
    </nav>
  );
}

export function NavButtons() {
    const pathname = usePathname();

    function linkClass(href: string) {
        return `${styles.link} ${pathname === href ? styles.active : ""}`;
    }

    return (
        <div className={styles.icons}>
            <Link href="/" className={linkClass("/")}><Home /></Link>
            <Link href="/about" className={linkClass("/about")}><User /></Link>
            <Link href="/projects" className={linkClass("/projects")}><Code /></Link>
            <Link href="/leadership" className={linkClass("/leadership")}><Flag /></Link>
            <Link href="/resume" className={linkClass("/resume")}><File /></Link>
        </div>
    )
}

type Theme = "dark" | "icecream" | "inverse";

export function ModeSwitcher() {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState<Theme | null>(null);

    function buttonClass(t: Theme) {
        return `${styles.modeButton} ${theme === t ? styles.activeTheme : ""}`;
    }

    return (
        <div className={styles.modeSwitcher}>
            <div className={styles.modeContainer}>
                <button className={styles.modeToggle} onClick={() => setOpen(!open)}>
                    <Palette />
                </button>
                <div className={`${styles.modeOptions} ${open ? styles.modeOptionsOpen : ""}`}>
                    <button className={buttonClass("dark")} onClick={() => setTheme("dark")}><Moon /></button>
                    <button className={buttonClass("icecream")} onClick={() => setTheme("icecream")}><IceCreamCone /></button>
                    <button className={`${buttonClass("inverse")} ${styles.invertedIceCream}`} onClick={() => setTheme("inverse")}><IceCreamCone /></button>
                </div>
            </div>
        </div>
    )
}
