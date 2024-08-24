import { Children } from "react";
import { createBrowserRouter } from 'react-router-dom'
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        Children: [
            {
                path: '/',
                element: <Home/>,
            },
        ],
    },
])

export default router;