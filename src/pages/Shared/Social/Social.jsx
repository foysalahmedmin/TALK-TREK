import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Social = () => {
    const navigate = useNavigate()
    const {SignInWithGoogle, SignInWithGitHub} = useAuth()
    const googleHandler = () => {
        SignInWithGoogle()
        .then(result => {
            console.log(result.user);
            navigate('/', { replace: true })
        })
    }
    const githubHandler = () => {
        SignInWithGitHub()
        .then(result => {
            console.log(result.user);
            navigate('/', { replace: true })
        })
    }
    return (
        <div className="flex gap-5 justify-center items-center my-5">
            <button onClick={googleHandler}>
                <FaGoogle className="text-4xl text-primary"  />
            </button>
            <button onClick={githubHandler}>
                <FaGithub className="text-4xl text-primary"  />
            </button>
        </div>
    );
};

export default Social;