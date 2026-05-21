"use client";

import styles from "../css/Navbar.module.css";
import { Home, User, Code, Flag, File, Moon, IceCreamCone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export function ModeSwitcher() {
    return (
        <div>
            <button><Moon /></button>
            <button><IceCreamCone /></button>
        </div>
    )
}
