import styles from "./styles.module.css";
import img from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { HeaderLink } from "../HeaderLink";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link>
                <img className={styles.logo} src={img} alt="Logo RecycleTreasures" />
            </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>
                <HeaderLink url="./ListaDesejos">
                    Lista de desejos
                </HeaderLink>
                <HeaderLink url="./Carrinho">
                    Carrinho
                </HeaderLink>
            </nav>
            <input className={styles.input} type="text" placeholder="O que você procura?" />
        </header>
    )
}
