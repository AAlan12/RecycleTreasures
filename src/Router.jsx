import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'

export const Router = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
