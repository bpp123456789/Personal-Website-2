import styles from "../css/Navbar.module.css";

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
        <div>
            <i className="fa-regular fa-house"></i>
            <i className="fa-regular fa-user"></i>
            <i className="fa-solid fa-code"></i>
            <i className="fa-regular fa-flag"></i>
        </div>
    )
}

export function ModeSwitcher() {
    return (
        <div>
            <i className="fa-regular fa-moon"></i>
            <i className="fa-solid fa-ice-cream"></i>
            <i className="fa-solid fa-ice-cream"></i>
        </div>
    )
}
