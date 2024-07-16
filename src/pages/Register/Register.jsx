import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    // const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    // const axiosCommon = useAxiosCommon();
    // const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        // const image = data.image[0];
        // const binaryImg = new FormData();
        // binaryImg.append("image", image);
        // const res = await axiosCommon.post(
        //     `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
        //     binaryImg, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });
        // createUser(data?.email, data?.password)
        //     .then((result) => {
        //         const loggedUser = result.user;
        //         updateUserProfile(data?.name, res?.data?.data?.display_url)
        //             .then(() => {
        //                 const userInfo = {
        //                     ...loggedUser,
        //                     role: data?.role,
        //                     photoUrl: res?.data?.data?.display_url

        //                 }
        //                 // create user entry in the database
        //                 axiosCommon.post('/users', userInfo)
        //                     .then(res => {
        //                         if (res.data.insertedId) {
        //                             reset()
        //                             Swal.fire({
        //                                 position: "top-end",
        //                                 icon: "success",
        //                                 title: "user created successfully",
        //                                 showConfirmButton: false,
        //                                 timer: 1500
        //                             });
        //                             navigate('/')
        //                         }
        //                     })

        //             })
        //             .catch((error) => {
        //                 console.log(error)
        //             });
        //     })
    };

    return (
        <>

            <div className='bg-[#DC1195] p-2'>
                <h1 className="text-5xl font-bold text-center text-white">Register now!</h1>
            </div>
            <div className="hero min-h-screen bg-[#DC1195]">
                <div className="hero-content lg:flex">
                    <div className="w-1/2">
                        <img className="rounded-xl animate-pulse h-[630px]" src={'https://i.postimg.cc/xdhkkMdf/3d-hand-hold-smartphone-with-authentication-form.jpg'} alt="" />
                    </div>
                    <div className="card md:w-1/2 bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type="number" {...register("contact", { required: true })} name="contact" placeholder="Mobile Number" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Mobile Number is required</span>}
                            </div>
                            <div className="lg:flex gap-2">
                                <div className="form-control lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Role</span>
                                    </label>
                                    <select defaultValue="default" {...register("role", { required: true })}
                                        className="select select-bordered ">
                                        <option disabled value="default">Select a Role</option>
                                        <option value="user">User</option>
                                        <option value="agent">Agent</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Status</span>
                                    </label>
                                    <input type="text" {...register("status", { required: true })} name="status" placeholder="" className="input input-bordered" defaultValue={'pending'} readOnly />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "" : "password"} {...register("password", {
                                    required: true,
                                    minLength: 5,
                                    maxLength: 5,
                                    pattern: /(?=(.*[0-9]){5,})/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                <span className="absolute top-12 left-3/4 ml-20 text-xl" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 5 Characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password must be 5 Characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must have number</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#DC1195] text-white" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className="text-center mt-2 pb-2">Already Have an Account ? Please <Link className="text-[#DC1195] font-bold" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;