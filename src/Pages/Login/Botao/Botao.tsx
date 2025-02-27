import { useContext } from "react"
import style from "./style.module.css"
import { BotaoContext } from "../../Store/BotaoContext"
import { useNavigate } from "react-router-dom"

export default function Botao() {
    const SubmitContext = useContext(BotaoContext)
    if (!SubmitContext) {
        return null;
    }
    const navigate = useNavigate()
    const { isSubmitting, isValid } = SubmitContext;
    let enviado = false
    async function handleClick() {
        enviado = true
        if (isValid) {
            enviado = true
            await new Promise(resolve => setTimeout(resolve, 2000));
            navigate("/Livraria/Home")
        }

    }
    return (
        <>
            <div className={style.botao}>
                <button onClick={handleClick} className={style.entrar} >{!isSubmitting ? "Login" : "Carregando..."}</button>
                <button className={style.cadastro}>Cadastrar</button>
            </div>
        </>
    )
}