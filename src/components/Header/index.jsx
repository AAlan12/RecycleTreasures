import styles from "./styles.module.css";
import img from "../../assets/logo.png"

export const Header = () => {
    return (
        <header className="text-gray-600 body-font shadow-lg">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={img} className={styles.logo} alt="Logo RecycleTreasures" />
                    <span className="ml-3 text-xl">RecycleTreasures</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Home</a>
                    <a className="mr-5 hover:text-gray-900">Lista de Desejos</a>
                    <a className="mr-5 hover:text-gray-900">Recomendações</a>
                    <a className="mr-5 hover:text-gray-900">Mais Vendidos</a>
                </nav>
                <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none 
                hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">Carrinho
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}
