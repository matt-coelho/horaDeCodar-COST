import { Link } from "react-router-dom"
import { Container } from "./Container"
import logo from "../../img/costs_logo.png"
import styles from "./NavBar.module.css"

export function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/company">Company</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles.item}>
            <Link to="/newproject">New Project</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}
