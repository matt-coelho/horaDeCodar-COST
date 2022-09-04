import { useNavigate } from "react-router-dom"
import { ProjectForm } from "../project/ProjectForm"
import styles from "./NewProject.module.css"

export function NewProject() {
  const history = useNavigate()

  function createPost(project) {
    project.costs = 0
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) =>
        resp.json().then(
          history("/projects", {
            state: { message: "Projeto criado com sucesso." },
          })
        )
      )
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>crie seu projeto para depois adicionar os servicos</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}
