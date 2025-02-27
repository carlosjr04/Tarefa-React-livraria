import { useNavigate, useParams } from "react-router-dom";
import style from "./styles.module.css";
import { useEffect, useState } from "react";
import { livro } from "../types/types";
import axios from "axios";

export default function Livro() {
  const { livroId } = useParams();

  const [livros, setLivros] = useState<livro[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/livros")
      .then((response) => setLivros(response.data))
      .catch((error) => console.log("algo deu errado" + error));
  }, []);
  const livro = livros.find((livro) => livro.id == Number(livroId));
  const navigate = useNavigate();
  function HandleClickHome() {
    navigate("/Livraria/Home");
  }
  function Compra() {
    const lista: number[] = JSON.parse(
      localStorage.getItem("carrinho") || "[]"
    );
    let livrorepetido = lista.find((element) => element === livro?.id);
    let confirmar;
    let listaId: number[] = lista;
    if (livrorepetido == undefined) {
      confirmar = confirm("Deseja adicionar esse livro ao seu carrinho?");
    } else {
      confirmar = confirm(
        "Deseja adicionar esse livro novamente ao seu carrinho?"
      );
    }
    if (confirmar) {
      if (!livro) {
        return;
      }
      listaId.push(livro.id);
      localStorage.setItem("carrinho", JSON.stringify(listaId));
    }
  }
  return (
    <>
      <div className={style.livro}>
        <div className={style.detalhe}>
          <h3 onClick={HandleClickHome} className={style.voltarTexto}>
            {" "}
            Detalhe do livro
          </h3>
          <button onClick={HandleClickHome} className={style.voltar}>
            &lt;
          </button>
        </div>
        <div className={style.quadro}>
          <div className={style.imagem}>
            <img src={livro?.capa} alt="" />
          </div>
          <div className={style.texto}>
            <div className={style.titulo}>
              <h2>{livro?.titulo}</h2>
              <p>{livro?.autor}</p>
            </div>
            <div className={style.sinopse}>
              <strong>Sinopse</strong>
              <p>{livro?.sinopse}</p>
            </div>
          </div>
        </div>
      </div>
      <button className={style.botao} onClick={Compra}>
        <p>R${livro?.preco.toFixed(2)}</p>
        <p>Adicione ao carrinho</p>
      </button>
    </>
  );
}
