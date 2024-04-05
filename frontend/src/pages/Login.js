import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <section id="login">
            <div className="mx-auto container p-4">
                <div className="bg-white p-2 w-full max-w-md mx-auto">
                    <div className=" w-20 h-20 mx-auto">
                        <FaUserTie size='5rem' />
                    </div>
                    <form>
                        <div className="grid">
                            <label >Email : </label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type="email"
                                    className="w-full h-full outline-none bg-transparent"
                                    placeholder="Enter Your Email"
                                />
                            </div>
                        </div>
                        <div>
                            <label>password : </label>
                            <div className="bg-slate-100 p-2 flex">
                                <input type={showPassword ? "text" : "password"} className="w-full h-full outline-none bg-transparent" placeholder="Enter Your Password" />
                                <div onClick={() => {
                                    setShowPassword((prev) => !prev)
                                }}>
                                    <span>
                                        {
                                            showPassword ? <IoEye /> : <IoMdEyeOff />
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className="block w-fit ml-auto hover:underline hover:text-blue-700
                            ">
                                        Forgot Password
                            </Link>
                        </div>
                        <button className=" bg-blue-400 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto mt-4 block">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
