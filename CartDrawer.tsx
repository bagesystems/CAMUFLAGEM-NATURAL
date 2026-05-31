import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { formatBRL } from '../../utils/format'
import { createPayment } from '../../services/api'
import styles from './CartDrawer.module.css'

export default function CartDrawer() {
  const {
    items, isOpen, closeCart,
    incrementItem, decrementItem, removeItem,
    totalItems, totalPrice, clearCart,
  } = useCart()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async () => {
    if (!items.length) return
    setLoading(true)
    setError(null)
    try {
      const backUrl = `${window.location.origin}/sucesso`
      const { initPoint } = await createPayment(items, backUrl)
      clearCart()
      closeCart()
      window.location.href = initPoint
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Erro ao conectar com o servidor.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className={styles.overlay} onClick={closeCart} />}

      <aside className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            CARRINHO
            {totalItems > 0 && <span className={styles.count}>{totalItems}</span>}
          </h2>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Fechar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <p>Carrinho vazio</p>
            <button className={styles.browseBtn} onClick={closeCart}>Ver Produtos</button>
          </div>
        ) : (
          <>
            <div className={styles.items}>
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className={styles.item}>
                  <img src={item.product.image} alt={item.product.name} className={styles.itemImg} />
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.product.name}</p>
                    <p className={styles.itemSize}>Tamanho: <strong>{item.size}</strong></p>
                    <p className={styles.itemPrice}>{formatBRL(item.product.price)}</p>
                    <div className={styles.qty}>
                      <button onClick={() => decrementItem(item.product.id, item.size)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementItem(item.product.id, item.size)}>+</button>
                    </div>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.product.id, item.size)}
                    aria-label="Remover"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span>Subtotal</span>
                <span>{formatBRL(totalPrice)}</span>
              </div>
              <div className={styles.totalRow}>
                <span>Frete</span>
                <span className={totalPrice >= 299 ? styles.freeShip : ''}>
                  {totalPrice >= 299 ? 'GRÁTIS' : 'Calculado no checkout'}
                </span>
              </div>
              <div className={`${styles.totalRow} ${styles.totalBig}`}>
                <span>Total</span>
                <span>{formatBRL(totalPrice)}</span>
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <button
                className={styles.checkoutBtn}
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? (
                  <span className={styles.spinner} />
                ) : (
                  'Finalizar Compra — MercadoPago'
                )}
              </button>

              <p className={styles.note}>
                Pagamento seguro via Mercado Pago. Pix, cartão, boleto.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}