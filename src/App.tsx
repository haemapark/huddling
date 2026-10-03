import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { MobileFooter } from '@/sections/MobileFooter'

function App() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center bg-bg">
      <Header />
      <Hero />
      <MobileFooter />
    </div>
  )
}

export default App
