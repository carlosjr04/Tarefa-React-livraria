import carrinho from "../../../src/assets/shopping-cart.png"
import perfil from "../../../src/assets/user.png"
import logo from "../../../src/assets/Logo (Stroke).png"
import style from "./style.module.css"
import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate()
    function HandleClickHome() {
        navigate("/Livraria/Home")
    }
    function HandleClickPefil() {
        navigate("/")
    }
    function HandleClickCarrinho() {
        navigate("/Livraria/carrinho")
    }
    return (
        <>
            <div className={style.header}>
                <img src={logo} alt="Logo da livraria" onClick={HandleClickHome} />
                <div className={style.imagens}>
                    <div className={style.perfil} onClick={HandleClickPefil}><img className={style.perfilImg} src={perfil} alt="Imagem de perfil" /></div>
                    <div className={style.carrinho} onClick={HandleClickCarrinho}><img className={style.carrinhoImg} src={carrinho} alt="Imagem de um carrinho" /></div>
                </div>
            </div>

        </>
    )
}