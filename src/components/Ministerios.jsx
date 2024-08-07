import styles from './style.module.css'
export const NomesMinisterio = ({name}) => (
 <h2 className={styles.name}>Conheca o ministerio {name || 'de Deus'} </h2>
)