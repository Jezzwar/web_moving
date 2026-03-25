import './index.css'
import { ModalProvider } from './context/ModalContext'
import { QuoteModal } from './components/ui/QuoteModal'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection'
import { CtaBannerSection } from './components/sections/CtaBannerSection'
function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen font-sans">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <HowItWorksSection />
          <WhyChooseUsSection />
          <CtaBannerSection />
        </main>
        <Footer />
      </div>
      <QuoteModal />
    </ModalProvider>
  )
}

export default App
