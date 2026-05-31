import styles from './Ticker.module.css'

const ITEMS = [
  'Streetwear de Bagé, RS',
  'Frete grátis acima de R$ 299',
  'Parcele em até 3x sem juros',
  'Gems Bulls — Natural Camouflage',
  'Camisetas disponíveis agora',
  'Jaquetas e moletons em breve',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={styles.wrap}>
      <div className={styles.ticker}>
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
