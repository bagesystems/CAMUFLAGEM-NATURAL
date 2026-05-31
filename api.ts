import axios from 'axios'
import { CartItem } from '../utils/types'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
})

export interface CreatePaymentResponse {
  preferenceId: string
  initPoint: string
}

export async function createPayment(
  items: CartItem[],
  backUrl?: string
): Promise<CreatePaymentResponse> {
  const payload = {
    items: items.map((i) => ({
      id: i.product.id,
      title: `${i.product.name} (${i.size})`,
      unitPrice: i.product.price,
      quantity: i.quantity,
    })),
    backUrl,
  }
  const { data } = await api.post<CreatePaymentResponse>('/api/create-payment', payload)
  return data
}

export async function healthCheck(): Promise<boolean> {
  try {
    await api.get('/api/health')
    return true
  } catch {
    return false
  }
}
