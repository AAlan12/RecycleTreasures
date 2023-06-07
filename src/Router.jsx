import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { Product } from './pages/Product'

export const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
