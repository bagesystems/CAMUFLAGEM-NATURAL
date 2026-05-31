import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CheckoutSuccessPage.module.css'

export default function CheckoutSuccessPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate('/'), 8000)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.icon}>✓</div>
        <h1 className={styles.title}>PEDIDO CONFIRMADO</h1>
        <p className={styles.text}>
          Obrigado pela sua compra! Você receberá a confirmação por e-mail em breve.
          Qualquer dúvida, nos chame no Instagram.
        </p>
        <a href="https://instagram.com/naturalcamouflage" className={styles.instaBtn} target="_blank" rel="noreferrer">
          @naturalcamouflage
        </a>
        <a href="/" className={styles.homeBtn}>Voltar à Loja</a>
        <p className={styles.redirect}>Redirecionando automaticamente em 8s...</p>
      </div>
    </div>
  )
}
