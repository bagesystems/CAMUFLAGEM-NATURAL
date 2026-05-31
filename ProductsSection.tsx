import { useState } from 'react'
import { PRODUCTS } from '../../utils/products'
import ProductCard from './ProductCard'
import styles from './ProductsSection.module.css'

type Filter = 'todos' | 'camiseta' | 'jaqueta' | 'moletom'

export default function ProductsSection() {
  const [filter, setFilter] = useState<Filter>('todos')

  const filtered = filter === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === filter)

  return (
    <section className={styles.section} id="produtos">
      <div className={styles.header}>
        <p className={styles.eyebrow}>// coleção atual</p>
        <h2 className={styles.title}>PRODUTOS</h2>
        <p className={styles.subtitle}>
          Peças com identidade. Cada drop é limitado — não deixa passar.
        </p>
      </div>

      <div className={styles.filters}>
        {(['todos', 'camiseta', 'jaqueta', 'moletom'] as Filter[]).map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles.filterBtnActive : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
