import styles from "../css/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <NavButtons></NavButtons>
    </nav>
  );
}

export function NavButtons() {
    return (
        <div>
            
        </div>
    )
}

export function ModeSwitcher() {

}
