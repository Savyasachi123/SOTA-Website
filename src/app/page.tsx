import Hero from '../components/Hero'
import Navbar from '@/components/Navbar'
import WhatIsSota from '@/components/WhatIsSota'
import FoundersSection from '@/components/Founders'
import Sponsors from '@/components/Sponsors'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
      <main className="bg-[#121212] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatIsSota />
      <Sponsors />
      <FoundersSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
