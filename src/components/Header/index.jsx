import styles from "./styles.module.css";
import img from "../../assets/logo.png"

export const Header = () => {
    return (
        <header>
            <img src={img} alt="Logo RecycleTreasures" />
            <input type="text" placeholder="O que você procura?" />
        </header>
    )
}
