import { useEffect } from "react"
import { useState } from "react"
import styles from "./Mensagem.module.css"

export function Mensagem({ type, message }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!message) {
      setVisible(false)
      return
    }
    setVisible(true)
    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [message])

  return (
    <>
      {visible && (
        <div className={`${styles.msg} ${styles[type]}`}>{message}</div>
      )}
    </>
  )
}
