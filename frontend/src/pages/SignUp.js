import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import imageTobase64 from "../helper/imageTobase64";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: ""

    })
    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleUploadPic = async (e) => {
        const file = e.target.files[0]

        const imagePic = await imageTobase64(file)
        setData((preve) => {
            return {
                ...preve,
                profilePic: imagePic
            }
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    // console.log("data login", data)
    return (
        <section id="signup">
            <div className="mx-auto container p-4">
                <div className="bg-white p-2 w-full max-w-md mx-auto">
                    <div className=" w-20 h-20 mx-auto relative overflow-hidden rounded-full">
                        <div>
                            <img src={data.profilePic} alt="iconn" />
                        </div>
                        <form action="">
                            <label>
                                <div className=" text-xs bg-opacity-65 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                                    upload Photo
                                </div>
                                <input type="file" className="hidden" onChange={handleUploadPic} />
                            </label>
                        </form>
                    </div>
                    <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
                        <div className="grid">
                            <label >Name : </label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type="text"
                                    className="w-full h-full outline-none bg-transparent"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    required
                                    value={data.name}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div className="grid">
                            <label >Email : </label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type="email"
                                    className="w-full h-full outline-none bg-transparent"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    required
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
                                    required
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
                        </div>
                        <div className="grid">
                            <label>Confirm password : </label>
                            <div className="bg-slate-100 p-2 flex">
                                <input type={showConfirmPassword ? "text" : "password"}
                                    className="w-full h-full outline-none bg-transparent"
                                    placeholder="Enter Confirm Password"
                                    name="confirmPassword"
                                    required
                                    value={data.confirmPassword}
                                    onChange={handleOnChange}
                                />
                                <div onClick={() => {
                                    setShowConfirmPassword((prev) => !prev)
                                }}>
                                    <span>
                                        {
                                            showConfirmPassword ? <IoEye /> : <IoMdEyeOff />
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className=" bg-blue-400 hover:bg-blue-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto mt-4 block">Sign Up</button>
                    </form>
                    <p className="my-5">Already Have account ? <Link to={"/login"} className="text-blue-400 hover:text-blue-700 hover:underline"> Login</Link></p>
                </div>
            </div>
        </section>
    )
}

export default SignUp