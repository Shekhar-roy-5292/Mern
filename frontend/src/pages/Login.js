import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email : "",
        password : ""
    })
    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((prev)=>{
           return{
            ...prev,
            [name] : value
           }
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    } 
    // console.log("data login", data)
    return (
        <section id="login">
            <div className="mx-auto container p-4">
                <div className="bg-white p-2 w-full max-w-md mx-auto">
                    <div className=" w-20 h-20 mx-auto">
                        <FaUserTie size='5rem' />
                    </div>
                    <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
                        <div className="grid">
                            <label >Email : </label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type="email"
                                    className="w-full h-full outline-none bg-transparent"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div className="grid">
                            <label>password : </label>
                            <div className="bg-slate-100 p-2 flex">
                                <input type={showPassword ? "text" : "password"} 
                                className="w-full h-full outline-none bg-transparent" 
                                placeholder="Enter Your Password"
                                name="password"
                                value={data.password}
                                onChange={handleOnChange}
                                 />
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
                            <Link to={"/forgot-Password"} className="block w-fit ml-auto hover:underline hover:text-blue-700
                            ">
                                        Forgot Password
                            </Link>
                        </div>
                        <button className=" bg-blue-400 hover:bg-blue-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto mt-4 block">Login</button>
                    </form>
                    <p className="my-5">Don't Have account ? <Link to={"/sign-up"} className="text-blue-400 hover:text-blue-700 hover:underline"> Sign up</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Login;
