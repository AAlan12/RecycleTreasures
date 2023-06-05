import React from 'react'
import { Hero } from '../../components/Hero'
import { Products } from '../../components/Products'

export const Home = () => {
    return (
        <>
            <Hero />
            <h2 className=' text-4xl font-bold text-center mt-20'>Produtos</h2>
            <Products />
        </>
    )
}
