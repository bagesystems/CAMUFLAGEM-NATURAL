import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.top}>
        <div className={styles.brand}>
          <p className={styles.logo}>NATURAL <span>CAMOUFLAGE</span></p>
          <p className={styles.tagline}>Gems Bulls — Bagé, RS</p>
        </div>

        <div className={styles.links}>
          <h4 className={styles.linkTitle}>Navegação</h4>
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>

        <div className={styles.links}>
          <h4 className={styles.linkTitle}>Contato</h4>
          <a href="https://instagram.com/naturalcamouflage" target="_blank" rel="noreferrer">
            @naturalcamouflage
          </a>
          <a href="mailto:contato@naturalcamouflage.com.br">
            contato@naturalcamouflage.com.br
          </a>
          <span>Bagé, Rio Grande do Sul — BR</span>
        </div>

        <div className={styles.links}>
          <h4 className={styles.linkTitle}>Pagamento</h4>
          <span>Mercado Pago</span>
          <span>Pix · Cartão · Boleto</span>
          <span>3× sem juros</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Natural Camouflage — Gems Bulls. Todos os direitos reservados.</p>
        <p className={styles.sub}>Feito em Bagé com orgulho gaúcho.</p>
      </div>
    </footer>
  )
}
