import { createBrowserRouter } from "react-router-dom"
import Blog from "../Components/Blog/Blog"
import Contact from "../Components/Contact/Contact"
import ErrorPage from "../Components/ErrorPage/ErrorPage"
import Home from "../Components/Home/Home"
import Main from "../Layout/Main"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    }
]);
export default router;