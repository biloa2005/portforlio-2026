import React from 'react'
import Navbar from '../components/accueil/Navbar'
import Footer from '../components/accueil/Footer'
import ContactForm from '../components/contact/ContactForm'

export default function page() {
  return (
    <div>
      <Navbar/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
