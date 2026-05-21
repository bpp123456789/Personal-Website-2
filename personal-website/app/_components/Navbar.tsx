import styles from "../css/Navbar.module.css";
import { Home, User, Code, Flag, File, Moon, IceCreamCone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <NavButtons></NavButtons>
        <ModeSwitcher></ModeSwitcher>
    </nav>
  );
}

export function NavButtons() {
    return (
        <div className={styles.icons}>
            <Home />
            <User />
            <Code />
            <Flag />
            <File />
        </div>
    )
}

export function ModeSwitcher() {
    return (
        <div>
            <Moon />
            <IceCreamCone />
        </div>
    )
}
