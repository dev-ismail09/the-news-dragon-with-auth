import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Catagory from "../Pages/Home/Home/Catagory/Catagory";
import NewsLayout from "../Layouts/NewsLayout/NewsLayout";
import News from "../Pages/News/News/News";
import UserLayout from "../Layouts/UserLayout";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Terms from "../Pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Catagory></Catagory>,
                loader: () => fetch(`http://localhost:5000/news/`)
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({params}) => fetch(`http://localhost:5000/catagories/${params.id}`)            
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRouter><News></News></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <UserLayout></UserLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    }
])

export default router;