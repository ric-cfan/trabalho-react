import { useState } from 'react'
import Footer from '../../components/Footer'
import MainLogin from '../../components/MainLogin'
import Header from '../../components/Header'
import './styles.css'

function Login() {

  return (
    <div className="login">

      <MainLogin />

      <Footer />

    </div>
  )
}

export default Login