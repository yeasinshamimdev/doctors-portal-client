import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
    // const [user, loading, error] = useAuthState(auth);
    const [token] = useToken(googleUser || emailUser)

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if (emailLoading || googleLoading) {
        return <Loading />
    }
    if (googleError || emailError) {
        signInError = <small className='text-red-500'>{googleError?.message || emailError?.message}</small>
    }


    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    {
                        <p>{googleUser?.user?.displayName}</p>
                    }
                    <h2 className="text-center text-3xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required!!'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email!!'
                                    }
                                })}
                                placeholder="Your email"
                                className="input input-bordered w-full "
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <input type="password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required!!'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 character or longer!!'
                                    }
                                })}
                                placeholder="password"
                                className="input input-bordered w-full "
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full' value="Login" type="submit" />
                    </form>

                    <p><small>New to doctors portal? <Link className='text-primary link-hover' to='/signup'>Create Account</Link></small> </p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;