import { useForm } from "react-hook-form"
import style from "./style.module.css"
import Botao from "../Botao/Botao"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {BotaoContext } from "../../Store/BotaoContext"

const userSchema = z.object({
    senha: z.string().nonempty("A senha não pode estar vazia").min(6, "A senha deve haver ao menos 6 caracteres"),
    Email: z.string().nonempty("O Email não pode estar vazia").email("O Email deve ser válido")
})
type User = z.infer<typeof userSchema>

export default function Form() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting,isValid} } = 
    useForm<User>({
        resolver: zodResolver(userSchema)
    })
    async function createUser(data: User) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data)
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(createUser)} className={style.forms}>
                <div >
                    <strong>E-mail</strong>
                    <input
                        type="text" className={style.EmailInput}
                        placeholder="Digite aqui seu E-mail"
                        {...register("Email")} />
                    {errors.Email && <span className={style.ErrorEmail}>{errors.Email.message}</span>}
                </div>
                <div>
                    <strong>Senha</strong>
                    <input
                        type="text"
                        className={style.senha}
                        placeholder="Digite aqui sua senha"
                        {...register("senha")} />
                    {errors.senha && <span className={style.ErrorEmail}>{errors.senha.message}</span>}
                </div>
                <BotaoContext.Provider value={{ isSubmitting , isValid}}>
                    <Botao />
                </BotaoContext.Provider>              
            </form>
        </>
    )
}