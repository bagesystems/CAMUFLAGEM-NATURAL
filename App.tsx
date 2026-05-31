import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './hooks/useCart'
import StorePage from './pages/StorePage'
import CheckoutSuccessPage from './pages/CheckoutSuccessPage'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StorePage />} />
          <Route path="/sucesso" element={<CheckoutSuccessPage />} />
          <Route path="*" element={<StorePage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}