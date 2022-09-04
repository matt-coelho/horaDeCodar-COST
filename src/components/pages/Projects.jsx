import styles from "./Projects.module.css"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Mensagem } from "../layout/Mensagem"
import { Container } from "../layout/Container"
import { LinkButton } from "../layout/LinkButton"
import { ProjectCard } from "../project/ProjectCard"

export function Projects() {
  const [projects, setProjects] = useState([])
  const location = useLocation()
  let message = ""

  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Mensagem message={message} type="success" />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={projects.id}
              key={project.id}
              budget={project.budget}
              category={project.category.name}
            />
          ))}
      </Container>
    </div>
  )
}
