import React from 'react'
import { Hero } from '../../components/Hero'
import { Products } from '../../components/Products'
import { FeatureCard } from '../../components/FeatureCard'

export const Home = () => {
    return (
        <>
            <Hero />
            <div className="flex flex-col text-center w-full mt-10">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Produtos</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MAIS POPULARES</h1>
            </div>
            <Products />
            <FeatureCard />
        </>
    )
}
