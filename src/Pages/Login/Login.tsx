import imagem from "../../../src/assets/Picture.png"
import logo from "../../../src/assets/Logo.png"
import style from "./styles.module.css"
import Form from "./Form/Form"


export default function Login() {
    return (
        <>
            <div style={{ display: "flex", height: "100vh" }}>
                <div style={{ margin: "0px", overflow: "hidden" }}>
                    <img src={imagem} alt="livraria" style={{
                        width: "50vw",
                        height: "100vh",

                        objectFit: "cover"
                    }} />
                </div>
                <div className={style.login}>
                    <div className={style.logo}>
                        <img src={logo} alt="logo da livraria" />
                    </div>
                    <div className={style.CaixaLogin}>

                        <div className={style.entre}>
                            <p>Bem vindo(a)!</p>
                            <h2>Entre na sua conta</h2>
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}