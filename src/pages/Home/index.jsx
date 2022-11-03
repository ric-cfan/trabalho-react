import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MainHome from '../../components/MainHome'
import './styles.css'

function Home() {

  return (
    <div className="home">
      <Header />

      <MainHome />

      <Footer />

    </div>
  )
}

export default Home