import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/404.jsx";
import Menu from "../pages/Menu.jsx";
import Login from "../pages/Login.jsx";
import Details from "../pages/Details.jsx";
import Home from "../pages/Home.jsx";
import Search from "../pages/Search.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/details/:idCocktail",
                element: <Details />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/login",
                element: <Login />
            }
            ,
            {
                path: "/search",
                element: <Search />
            }
        ]
    }
]);

export default router;