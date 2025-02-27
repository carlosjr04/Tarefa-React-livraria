import { useNavigate } from "react-router-dom"
import {livro} from "../../../types/types"
import style from "./style.module.css"


export default function Livros(livro:livro) {
const navigate = useNavigate()
function handleClick(id:number){
    navigate(`/Livraria/livro/${id}`)
}
    return (
        <div onClick={() => handleClick(livro.id)} className={style.quadro}>
            <img  src={livro.capa} alt="capa do livro"/>  
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-around", 
            }}>
                <div className={style.titulo}>
                    <h3>{livro.titulo}</h3>
                    <p>{livro.autor}</p>
                </div>
                <h2 className={style.preco}>R${livro.preco.toFixed(2)}</h2>
            </div>
        </div>
    )
}