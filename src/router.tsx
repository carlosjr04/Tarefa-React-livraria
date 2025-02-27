import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Genero from "./Pages/Genero/Genero";
import RootLayout from "./RootLayout";
import Livro from "./Pages/livro/Livro";
import Carrinho from "./Pages/carrinho/carrinho";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" replace />
    },{
        path: "/login",
        element: <Login />
    },
    {
        path: "/Livraria",
        element: <RootLayout />,
        children: [
            {
                path: "Home",
                element: <Home />
            },
            {
                path: "genero/:livroGenero",
                element: <Genero />
            },
            {
                path: "livro/:livroId",
                element: <Livro />
            },{
                path: "carrinho",
                element: <Carrinho />
            }
        ]
    }
]);
export default router