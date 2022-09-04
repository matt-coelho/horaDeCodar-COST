import { Input } from "../form/Input"
import { Select } from "../form/Select"
import { SubmitButton } from "../form/SubmitButton"
import { useEffect, useState } from "react"
import styles from "./ProjectForm.module.css"

export function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => {
        resp.json().then((data) => {
          setCategories(data)
        })
      })
      .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setProject({ ...project, [name]: value })
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <div>
        <Input
          type="text"
          placeholder="Insira o nome do projeto"
          name="name"
          text="Nome do Projeto"
          handleOnChange={handleChange}
          value={project.name ? project.name : ""}
        />
      </div>
      <div>
        <Input
          type="number"
          name="budget"
          placeholder="Insira o orçamento total do projeto"
          text="Orçamento do Projeto"
          handleOnChange={handleChange}
          value={project.budget ? project.budget : ""}
        />
      </div>
      <div>
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ""}
        />
      </div>
      <div>
        <SubmitButton text={btnText} />
      </div>
    </form>
  )
}
