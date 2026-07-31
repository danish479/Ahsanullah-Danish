import { useState } from 'react'
import './App.css'
import Hero from './sections/Hero/Hero'
import Skills from './sections/skill/skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
