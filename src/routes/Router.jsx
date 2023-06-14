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
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome/InstructorHome";
import InstructorClasses from "../pages/Dashboard/Instructor/InstructorClasses/InstructorClasses";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import InstructorClassUpdate from "../pages/Dashboard/Instructor/InstructorClassUpdate/InstructorClassUpdate";

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
                path: "studentHome",
                element: <StudentHome />
            },
            {
                path: "studentSelectedClass",
                element: <StudentSelectedClasses />
            },
            {
                path: "studentEnrolledClass",
                element: <StudentEnrolledClasses />
            },
            {
                path: "studentPayment/:id",
                element: <StudentPayment />,
            },
            {
                path: "studentPaymentHistory",
                element: <StudentPaymentHistory />
            },
            {
                path: 'instructorHome',
                element: <InstructorHome />
            },
            {
                path: 'instructorClasses',
                element: <InstructorClasses />
            },
            {
                path: 'instructorAddClass',
                element: <AddClass />
            },
            {
                path: 'instructorClassUpdate/:id',
                element: <InstructorClassUpdate />
            },
            {
                path: 'adminHome',
                element: <AdminHome />
            },
            {
                path: 'adminManageClasses',
                element: <ManageClasses />
            },
            {
                path: 'adminManageUsers',
                element: <ManageUsers />
            }
        ]
    }
]);


export default router;