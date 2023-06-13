import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../layouts/Dashboard";
import Home from "../pages/Home/Home/Home";
import SingIn from "../pages/SignIn/SingIn";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes/Classes";
import Instructor from "../pages/Instructor/Instructor/Instructor";
import PrivateRoute from "./PrivateRoute";
import StudentHome from "../pages/Dashboard/Student/StudentHome/StudentHome";
import StudentSelectedClasses from "../pages/Dashboard/Student/StudentSelectedClasses/StudentSelectedClasses";
import StudentEnrolledClasses from "../pages/Dashboard/Student/StudentEnrolledClasses/StudentEnrolledClasses";
import StudentPayment from "../pages/Dashboard/Student/StudentPayment/StudentPayment";
import StudentPaymentHistory from "../pages/Dashboard/Student/StudentPaymentHistory/StudentPaymentHistory";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
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
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "student",
                element: <StudentHome />
            },
            {
                path: "student/selectedClass",
                element: <StudentSelectedClasses />
            },
            {
                path: "student/enrolledClass",
                element: <StudentEnrolledClasses />
            },
            {
                path: "student/payment/:id",
                element: <StudentPayment />,
            },
            {
                path: "student/paymentHistory",
                element: <StudentPaymentHistory />
            },
            {
                path: 'admin'
            },
            {
                path: 'admin/manageClasses',
                element: <ManageClasses />
            },
            {
                path: 'admin/manageUsers',
                element: <ManageUsers />
            }
        ]
    }
]);


export default router;