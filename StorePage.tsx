import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Ticker from '../components/ui/Ticker'
import Hero from '../components/sections/Hero'
import ProductsSection from '../components/sections/ProductsSection'
import AboutSection from '../components/sections/AboutSection'
import CartDrawer from '../components/cart/CartDrawer'
import PaymentBanner from '../components/ui/PaymentBanner'
import { usePaymentStatus } from '../hooks/usePaymentStatus'

export default function StorePage() {
  const paymentStatus = usePaymentStatus()

  return (
    <>
      <Navbar />
      <Ticker />
      <main>
        <Hero />
        <ProductsSection />
        <AboutSection />
      </main>
      <Footer />
      <CartDrawer />
      <PaymentBanner status={paymentStatus} />
    </>
  )
}
