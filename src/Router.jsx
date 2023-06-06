import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'

export const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Home />
        <Footer />
    </BrowserRouter>
  )
}
