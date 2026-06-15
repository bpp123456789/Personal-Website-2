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
            <Link href="/" className={linkClass("/")}><Home /><span className={styles.tooltip}>Home</span></Link>
            <Link href="/about" className={linkClass("/about")}><User /><span className={styles.tooltip}>About</span></Link>
            <Link href="/projects" className={linkClass("/projects")}><Code /><span className={styles.tooltip}>Projects</span></Link>
            <Link href="/leadership" className={linkClass("/leadership")}><Flag /><span className={styles.tooltip}>Leadership</span></Link>
            <Link href="/resume" className={linkClass("/resume")}><File /><span className={styles.tooltip}>Resume</span></Link>
        </div>
    )
}

type Theme = "dark" | "icecream" | "neopolitan";

const themeClass: Record<Theme, string> = {
    dark: "dark",
    icecream: "",
    neopolitan: "neopolitan",
};

export function ModeSwitcher() {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState<Theme | null>(null);

    function applyTheme(t: Theme) {
        setTheme(t);
        const themes = Object.values(themeClass).filter(Boolean);
        document.documentElement.classList.remove(...themes);
        if (themeClass[t]) {
            document.documentElement.classList.add(themeClass[t]);
        }
    }

    function buttonClass(t: Theme) {
        return `${styles.modeButton} ${theme === t ? styles.activeTheme : ""}`;
    }

    return (
        <div className={styles.modeSwitcher}>
            <div className={styles.modeContainer}>
                <button className={styles.modeToggle} onClick={() => setOpen(!open)}>
                    <Palette />
                    <span className={styles.tooltip}>Themes</span>
                </button>
                <div className={`${styles.modeOptions} ${open ? styles.modeOptionsOpen : ""}`}>
                    <button className={buttonClass("dark")} onClick={() => applyTheme("dark")}><Moon /></button>
                    <button className={buttonClass("icecream")} onClick={() => applyTheme("icecream")}><IceCreamCone /></button>
                    <button className={`${buttonClass("neopolitan")} ${styles.invertedIceCream}`} onClick={() => applyTheme("neopolitan")}><IceCreamCone /></button>
                </div>
            </div>
        </div>
    )
}
