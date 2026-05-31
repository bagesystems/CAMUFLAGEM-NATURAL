import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.left}>
        <p className={styles.eyebrow}>// nossa história</p>
        <h2 className={styles.title}>GEMS<br />BULLS</h2>
        <div className={styles.tag}>Bagé · RS · Brasil</div>
      </div>

      <div className={styles.right}>
        <p className={styles.text}>
          Natural Camouflage nasceu em Bagé, no coração do Rio Grande do Sul.
          A marca representa quem vive nas ruas, que se camufla no cotidiano
          mas nunca deixa de ser visto — a identidade que fala por si.
        </p>
        <p className={styles.text}>
          Inspirada no streetwear clássico de skate e no DNA gaúcho,
          cada peça é desenhada para durar e para representar. Sem modinha,
          sem fast fashion — só qualidade e atitude.
        </p>
        <div className={styles.values}>
          {['Qualidade', 'Autenticidade', 'Identidade', 'Bagé'].map((v) => (
            <span key={v} className={styles.value}>{v}</span>
          ))}
        </div>
      </div>
    </section>
  )
}