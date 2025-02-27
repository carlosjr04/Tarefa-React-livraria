import { useEffect, useState } from "react"
import { livro } from "../types/types"
import axios from "axios"
import style from "./style.module.css"
export default function Carrinho() {
    const [livrosCar, setLivrosCar] = useState<livro[]>([])
    useEffect(() => {
        axios.get("http://localhost:3000/livros")
            .then(response => {

                const listaCarrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
                const livrosNoCarrinho = listaCarrinho
                    .map((id: number) => response.data.find((livro: livro) => livro.id === id))
                    .filter((livro: livro | undefined) => livro !== undefined) as livro[];

                setLivrosCar(livrosNoCarrinho);
            })
            .catch(error => console.log("Ocorreu um erro: " + error));
    }, []);

    function Comprar(id: number) {
        let confirmar = confirm("Deseja comprar este livro?")
        let retirado = false
        let novaLista:livro[] = [];
        let novaListaId:number [] = [];
        if (confirmar) {
            livrosCar.map((livro:livro)=>{
                if(livro.id != id || retirado==true){
                    novaLista.push(livro)
                    novaListaId.push(livro.id)
                }else{
                    retirado = true
                }
            })
            
            setLivrosCar(novaLista)
            localStorage.setItem("carrinho", JSON.stringify(novaListaId));
            alert("Livro comprado com sucesso!")
        }

    }
    function Deletar(id: number) {
        let confirmar = confirm("Deseja retirar este livro de seu carrinho?")
        let retirado = false
        let novaLista:livro[] = [];
        let novaListaId:number [] = [];
        if (confirmar) {
            livrosCar.map((livro:livro)=>{
                if(livro.id != id || retirado==true){
                    novaLista.push(livro)
                    novaListaId.push(livro.id)
                }else{
                    retirado = true
                }
            })
            
            setLivrosCar(novaLista)
            localStorage.setItem("carrinho", JSON.stringify(novaListaId));
            alert("Livro excluido com sucesso!")
        }
    }
    return (
        <>{livrosCar.length === 0? <div style={{display:"flex",justifyContent:"center",marginTop:"10rem"}}><h1 className={style.textoVazio}>Não possui nenhum livro em seu carrinho</h1></div> :
            <div className={style.lista}>
                {livrosCar.map(livro =>
                    <div>
                        <div className={style.cardLivro}>
                            <img src={livro.capa} alt="capa do livro" />
                            <div className={style.texto}>
                                <h4>{livro.titulo}</h4>
                                <div className={style.titulo}>
                                    <p>{livro.autor}</p>
                                    <h3>R${livro.preco.toFixed(2)}</h3>
                                </div>
                            </div>
                            <div className={style.botoes}>
                                <button onClick={() => Comprar(livro.id)} className={style.comprar}>Comprar</button>
                                <button onClick={() => Deletar(livro.id)} className={style.excluir}>Excluir</button>
                            </div>

                        </div>
                    </div>
                )}
            </div>}


        </>
    )
}