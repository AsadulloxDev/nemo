import React from 'react'
import Header from './Components/Header/Header'
import Section from './Pages/Section'
import Turlar from './Pages/Turlar/Turlar'
import Mexmonxona from './Pages/mexmonxona/Mexmonxona'
import Aviachipta from './Pages/Aviachipta/Aviachipta'
import AviaMarquee from './Pages/Avia-Marquee/Avia-marquee'
import Input from './Pages/Input/Input'
import Footer from './Components/Footer.jsx/Footer'

function App() {
  return (
    <div>
      <Header></Header>
      <Section></Section>
      <Turlar></Turlar>
      <Mexmonxona></Mexmonxona>
      <Aviachipta></Aviachipta>
      <AviaMarquee></AviaMarquee>
      <Input></Input>
      <Footer></Footer>
    </div>
  )
}

export default App