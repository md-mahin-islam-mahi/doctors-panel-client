import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-[380px] h-[300px]">
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className="text-2xl">Signup</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-accent">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered border-gray-300" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-accent">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered border-gray-300" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-accent">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered border-gray-300" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Login</button>
                        </div>
                        <div>
                            <p className=' text-sm'>Already Have an Account??
                                <Link to="/login">
                                    <span className='text-secondary ml-2'>Login</span>
                                </Link></p>
                        </div>

                        <div className='relative mt-5'>
                            <hr />
                            <p className="text-sm relative mx-auto bottom-3 bg-white w-10">OR</p>
                        </div>

                        <div className="form-control">
                            <button className="btn btn-outline btn-accent ">CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;