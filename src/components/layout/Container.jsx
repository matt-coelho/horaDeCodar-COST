import styles from "./Container.modules.css"

export function Container(props) {
  return (
    <div className={`${styles.container} ${props.customClass}`}>
      {props.children}
    </div>
  )
}
