import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.left}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} /> Bagé, RS — Brasil
        </p>
        <h1 className={styles.title}>
          NATURAL<br />
          <span>CAMOU</span><br />
          FLAGE
        </h1>
        <p className={styles.subtitle}>
          Streetwear com identidade — nascido nas ruas do Rio Grande do Sul.
          Cada peça é um manifesto de quem não passa em branco.
        </p>
        <div className={styles.ctas}>
          <a href="#produtos" className={styles.btnPrimary}>Ver Coleção</a>
          <a href="#sobre" className={styles.btnGhost}>Nossa História</a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Algodão Premium</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>RS</span>
            <span className={styles.statLabel}>Bagé, Gaúcho</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>3×</span>
            <span className={styles.statLabel}>Sem Juros</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imgBlock}>
          <div className={styles.imgTag}>NC — SS25</div>
          <div className={styles.imgPlaceholder}>
            <svg viewBox="0 0 400 500" width="400" height="500" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="500" fill="#1a2418"/>
              <rect x="80" y="80" width="240" height="300" rx="4" fill="#2c3a2a" opacity="0.7"/>
              <circle cx="200" cy="230" r="100" fill="none" stroke="#4a6048" strokeWidth="1.5" opacity="0.6"/>
              <circle cx="200" cy="230" r="70" fill="none" stroke="#6b8c60" strokeWidth="1" opacity="0.4"/>
              <text x="200" y="220" fontFamily="monospace" fontSize="18" fill="#8faf82" textAnchor="middle" fontWeight="bold">NATURAL</text>
              <text x="200" y="245" fontFamily="monospace" fontSize="18" fill="#8faf82" textAnchor="middle" fontWeight="bold">CAMOUFLAGE</text>
              <text x="200" y="270" fontFamily="monospace" fontSize="12" fill="#6b8c60" textAnchor="middle">GEMS BULLS</text>
              <rect x="120" y="420" width="160" height="2" fill="#4a6048" opacity="0.5"/>
            </svg>
          </div>
          <div className={styles.imgLabel}>Gems Bulls — Coleção Principal</div>
        </div>
        <div className={styles.floatBadge}>
          <span>NEW</span>
          DROP
        </div>
      </div>
    </section>
  )
}
