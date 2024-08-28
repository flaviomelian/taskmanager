import { createBrowserRouter } from 'react-router-dom'
import Home from "../Pages/Home/Home"
import Root from "../Layout/Root"
import SignUp from "../Pages/SignUp/SignUp"
import Login from '../Pages/Login/Login'
import RegisterOK from '../Pages/RegisterOK/RegisterOK'
import HomeDev from '../Pages/HomeDev/HomeDev'
import HomeClient from '../Pages/HomeClient/HomeClient'
import HomeMaster from '../Pages/HomeMaster/HomeMaster'
import Profile from '../Pages/Profile/Profile'
import Repositories from '../Pages/Repositories/Repositories'
import TeamRepositories from '../Pages/TeamRepositories/TeamRepositories'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '',
                element: <Home/>,
            },
            {
                path: '/signup',
                element: <SignUp/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/signedup',
                element: <RegisterOK/>,
            },
            {
                path: '/HomeDev',
                element: <HomeDev/>,
            },
            {
                path: '/HomeClient',
                element: <HomeClient/>,
            },
            {
                path: '/HomeMaster',
                element: <HomeMaster/>,
            },
            {
                path: '/profile',
                element: <Profile/>,
            },
            {
                path: '/my-repositories',
                element: <Repositories/>,
            },
            {
                path: '/team-repositories',
                element: <TeamRepositories/>,
            },
        ],
    },
])

export default router;