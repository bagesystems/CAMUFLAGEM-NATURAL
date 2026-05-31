import { useState } from 'react'
import { Product, Size } from '../../utils/types'
import { useCart } from '../../hooks/useCart'
import { formatBRL } from '../../utils/format'
import styles from './ProductCard.module.css'

interface Props { product: Product }

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState<Size | null>(null)
  const [feedback, setFeedback] = useState(false)

  const handleAdd = () => {
    if (!product.available) return
    if (!selectedSize) {
      const el = document.getElementById(`size-hint-${product.id}`)
      el?.classList.add(styles.shake)
      setTimeout(() => el?.classList.remove(styles.shake), 500)
      return
    }
    addItem(product, selectedSize)
    setFeedback(true)
    setTimeout(() => setFeedback(false), 1400)
  }

  return (
    <div className={`${styles.card} ${!product.available ? styles.unavailable : ''}`}>
      <div className={styles.imgWrap}>
        <img src={product.image} alt={product.name} className={styles.img} />
        {product.badge && (
          <span className={`${styles.badge} ${product.badge === 'EM BREVE' ? styles.badgeSoon : ''}`}>
            {product.badge}
          </span>
        )}
      </div>

      <div className={styles.info}>
        <p className={styles.category}>{product.category}</p>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>

        <div className={styles.footer}>
          <span className={styles.price}>{formatBRL(product.price)}</span>

          {product.available ? (
            <div className={styles.actions}>
              <div className={styles.sizes} id={`size-hint-${product.id}`}>
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    className={`${styles.sizeBtn} ${selectedSize === s ? styles.sizeBtnActive : ''}`}
                    onClick={() => setSelectedSize(s)}
                  >{s}</button>
                ))}
              </div>
              <button
                className={`${styles.addBtn} ${feedback ? styles.addBtnDone : ''}`}
                onClick={handleAdd}
              >
                {feedback ? '✓ Adicionado' : '+ Carrinho'}
              </button>
            </div>
          ) : (
            <span className={styles.soon}>Em breve</span>
          )}
        </div>
      </div>
    </div>
  )
}
