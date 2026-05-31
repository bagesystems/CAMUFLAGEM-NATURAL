import { useEffect, useState } from 'react'
import { PaymentStatus } from '../utils/types'

export function usePaymentStatus(): PaymentStatus {
  const [status, setStatus] = useState<PaymentStatus>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const payment = params.get('payment') as PaymentStatus
    if (payment) {
      setStatus(payment)
      const url = new URL(window.location.href)
      url.searchParams.delete('payment')
      url.searchParams.delete('collection_id')
      url.searchParams.delete('collection_status')
      url.searchParams.delete('payment_id')
      url.searchParams.delete('status')
      url.searchParams.delete('external_reference')
      url.searchParams.delete('payment_type')
      url.searchParams.delete('merchant_order_id')
      url.searchParams.delete('preference_id')
      window.history.replaceState({}, '', url.toString())
    }
  }, [])

  return status
}
