import styles from "styles/nav/Nav.module.css";
import NavResponsive from "./nav-responsive";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.divImg}>
        <img src="/7sat.webp" alt="logo da empresa" />
      </div>

      <ul className={styles.ul}>
        <li>
          <Link href="/components/section-service">SERVIÇOS</Link>

          <Link href="/components/section-contat">CONTATO</Link>

          <Link href="/components/section-client">ÁREA DO CLIENTE</Link>
        </li>
      </ul>
      <NavResponsive />
    </nav>
  );
};
export default Nav;
