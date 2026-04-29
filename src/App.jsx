import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import PartnersSection from './components/PartnersSection'
import Presentation from './components/Presentation'
import StatsSection from './components/StatsSection'
import BlogSection from './components/BlogSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import RealisationsSection from './components/RealisationsSection'
import ContactSection from './components/ContactSection'


function App() {

  return (
    <>
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='overflow-hidden'>
        <Navbar/>
        <Carousel />
        <PartnersSection />
        <Presentation />
        <StatsSection />
        <RealisationsSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
    </>
  )
}

export default App
