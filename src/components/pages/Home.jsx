import styles from "./Home.module.css"
import savings from "../../img/savings.svg"
import { LinkButton } from "../layout/LinkButton"

export function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem vindo</h1>
      <p>comece a gerenciar seus projetos</p>
      <LinkButton to="/newproject" text="Criar Projetos" />
      <img src={savings} alt="costs" />
    </section>
  )
}
