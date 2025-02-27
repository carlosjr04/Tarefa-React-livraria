import { Outlet } from "react-router-dom";
import Header from "./componentes/Header/Header";

export default function RootLayout(){
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}