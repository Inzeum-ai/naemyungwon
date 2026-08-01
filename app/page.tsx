import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Vision from '@/components/sections/Vision'

export default function Home() {
  return (
    <div className="relative flex h-auto w-full flex-col">
      <Header />
      <main id="main-content" className="flex flex-col w-full pt-20">
        <Hero />
        <Vision />
      </main>
      <Footer />
    </div>
  )
}
