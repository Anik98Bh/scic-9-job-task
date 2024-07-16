import { Link } from "react-router-dom";

const Navbar = () => {
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-[#DC1195] text-white rounded-br-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="">
                        <Link to={"/"}>
                            <button className="btn btn-ghost text-xl">DigiWallet<img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/10017/10017650.png" alt="" /></button>
                        </Link>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#DC1195] text-white border-none">Log Out</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;