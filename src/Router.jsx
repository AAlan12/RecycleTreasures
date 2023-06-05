import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'

export const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Home />
    </BrowserRouter>
  )
}
