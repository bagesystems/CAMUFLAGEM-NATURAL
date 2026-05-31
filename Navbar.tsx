import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { totalItems, toggleCart } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="/" className={styles.logo}>
        NATURAL <span>CAMOUFLAGE</span>
      </a>

      <ul className={styles.links}>
        <li><a href="#produtos">Produtos</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <button className={styles.cartBtn} onClick={toggleCart} aria-label="Carrinho">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        CARRINHO
        {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
      </button>
    </nav>
  )
}
