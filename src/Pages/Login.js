import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import GoogleLogin from './GoogleLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    let errorElement;


    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/registration');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }


    return (
        <div className='register-form'>
            <h2 className='text-primary text-center mt-2 text-6xl'>Please Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div class="form-control mx-20 px-20">
                        <label class="label">
                            <span class="label-text">Your Email</span>
                        </label>
                        <label class="input-group input-group-vertical">
                            <input type="email" name="email" id="" placeholder='Email Address' required />
                        </label>
                    </div>
                </div>
                <div>
                    <div class="form-control mx-20 px-20">
                        <label class="label">
                            <span class="label-text">Your Password</span>
                        </label>
                        <label class="input-group input-group-vertical">
                            <input type="password" name="password" id="" placeholder='password' required />
                        </label>
                    </div>
                </div>

                <input
                    className='w-50 mx-auto btn btn-primary mt-4'
                    type="submit"
                    value="Login" />
            </form>
            <p className="my-8"> If you are new here... <Link to="/registration" className='text-primary pe-auto text-decoration-none ' onClick={navigateRegister}>Please Register First</Link> </p>
            <GoogleLogin></GoogleLogin>

            <p className="my-4">Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <ToastContainer/>
        </div>
    );
};

export default Login;