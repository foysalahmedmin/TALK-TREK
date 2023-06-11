import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Social = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()
    const { SignInWithGoogle, SignInWithGitHub } = useAuth()
    const googleHandler = () => {
        SignInWithGoogle()
            .then(result => {
                navigate(from, { replace: true })
                const userResult = result.user
                if (userResult) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Signed-In Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                axios.post('http://localhost:5000/user', {
                    Name: userResult.displayName,
                    Email: userResult.email,
                    Image: userResult.photoURL,
                    Role: 'student'
                })
                    .then(result => {
                        console.log(result)
                    })
            })
    }
    const githubHandler = () => {
        SignInWithGitHub()
            .then(result => {
                navigate(from, { replace: true })
                const userResult = result.user
                if (userResult) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Signed-In Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                axios.post('http://localhost:5000/user', {
                    Name: userResult.displayName,
                    Email: userResult.email,
                    Image: userResult.photoURL,
                    Role: 'student'
                })
                    .then(result => {
                        console.log(result)
                    })
            })
    }
    return (
        <div className="flex gap-5 justify-center items-center my-5">
            <button onClick={googleHandler}>
                <FaGoogle className="text-4xl text-primary" />
            </button>
            <button onClick={githubHandler}>
                <FaGithub className="text-4xl text-primary" />
            </button>
        </div>
    );
};

export default Social;