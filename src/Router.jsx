import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'

export const Router = () => {
  return (
    <BrowserRouter>
        <Header />
    </BrowserRouter>
  )
}