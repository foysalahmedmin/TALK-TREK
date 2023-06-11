import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../layouts/Dashboard";
import Home from "../pages/Home/Home/Home";
import SingIn from "../pages/SignIn/SingIn";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes/Classes";
import Instructor from "../pages/Instructor/Instructor/Instructor";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/signIn",
                element: <SingIn />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/classes",
                element: <Classes />
            },
            {
                path: "/instructor",
                element: <Instructor />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: ""
            }
        ]
    }
]);


export default router;