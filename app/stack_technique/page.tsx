import React from 'react'
import Navbar from '../components/accueil/Navbar'
import Footer from '../components/accueil/Footer'
import TechStack from '../components/Stack/TechStack'

export default function page() {
  return (
    <div>
        <Navbar/>
<TechStack/>
        <Footer/>
    </div>
  )
}
