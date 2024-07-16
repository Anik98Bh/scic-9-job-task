import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const emailContact = form.email.value || form.contact?.value;
        const password = form.password.value;
        const newForm={emailContact,password};
        console.log(newForm);
        // signIn(email, password)
        // .then((result) => {
        //     const user = result.user;
        //     // console.log(user)
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "success",
        //         title: "User Login successfully",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        //     navigate(from, { replace: true });
        // })
        //   .catch((error) => {
        //     console.error(error)
        //   });
    }

    return (
        <>
            <div className='bg-[#DC1195] p-2'>
                <h1 className="text-5xl font-bold text-center text-white">Login now!</h1>
            </div>
            <div className="hero min-h-screen bg-[#DC1195]">
                <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2">
                        <img className="rounded-xl animate-pulse w-96 h-96" src={'https://i.postimg.cc/xdhkkMdf/3d-hand-hold-smartphone-with-authentication-form.jpg'} alt="" />
                    </div>
                    <div className="card md:w-1/2 bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email/Mobile Number</span>
                                </label>
                                <input type={Number?"number":"email"} name="emailContact" placeholder="email or mobile number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#DC1195] text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center mt-2 mb-5">New to here? Please <Link className="text-[#DC1195] font-bold" to="/register">Register</Link></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;