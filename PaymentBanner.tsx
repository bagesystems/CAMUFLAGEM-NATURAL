import { useEffect, useState } from 'react'
import { PaymentStatus } from '../../utils/types'
import styles from './PaymentBanner.module.css'

const MESSAGES: Record<NonNullable<PaymentStatus>, { text: string; type: 'success' | 'warn' | 'error' }> = {
  success: { text: '✓ Pagamento aprovado! Obrigado pela compra. Em breve você receberá a confirmação por e-mail.', type: 'success' },
  pending: { text: '⏳ Pagamento pendente. Assim que confirmado, você receberá a confirmação.', type: 'warn' },
  failure: { text: '✗ Houve um problema com o pagamento. Tente novamente ou use outro método.', type: 'error' },
}

export default function PaymentBanner({ status }: { status: PaymentStatus }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (status) {
      const t = setTimeout(() => setVisible(false), 8000)
      return () => clearTimeout(t)
    }
  }, [status])

  if (!status || !visible) return null

  const { text, type } = MESSAGES[status]

  return (
    <div className={`${styles.banner} ${styles[type]}`}>
      <span>{text}</span>
      <button className={styles.close} onClick={() => setVisible(false)}>✕</button>
    </div>
  )
}
