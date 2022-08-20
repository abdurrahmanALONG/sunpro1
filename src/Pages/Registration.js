import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from './Loading';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // console.log('Updated profile');
        navigate('/home');
    }
    return (
        <div className='register-form'>
            <h2 className='text-primary text-center mt-2 text-6xl'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <div class="form-control mx-20 px-20">
                        <label class="label">
                            <span class="label-text">Your Name</span>
                        </label>
                        <label class="input-group input-group-vertical">
                            <input type="text" name="name" id="" placeholder="Your Name" class="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div>
                    <div class="form-control mx-20 px-20">
                        <label class="label">
                            <span class="label-text">Your Email</span>
                        </label>
                        <label class="input-group input-group-vertical">
                            <input type="email" name="email" id="" placeholder="Email address" class="input input-bordered" required />
                        </label>
                    </div>
                </div>
                <div>
                    <div class="form-control mx-20 px-20">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <label class="input-group input-group-vertical">
                            <input type="password" name="password" id="" placeholder="Password" class="input input-bordered" required />
                        </label>
                    </div>
                </div>
                <input
                    className='w-50 mx-auto btn btn-primary mt-6'
                    type="submit"
                    value="Registration" />
            </form>
            <p className="my-8">Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Registration;