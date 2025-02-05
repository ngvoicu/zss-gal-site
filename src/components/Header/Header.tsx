import heroBackground from "../../../public/helper/juyt_6_copy.jpg"
import newLogo from "../../../public/helper/gal-logo-new.jpg"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${heroBackground.src})`, backgroundSize: "cover" }} >
                <div className="text-center mt-11 mb-11">
                    <div>
                        <h1 className="mb-9 mt-5 text-7xl font-bold text-white text-stroke-1 text-stroke-indigo-200">L E A D E R</h1>
                        <p className="py-6 text-white text-stroke-1 text-stroke-indigo-100">
                            DEZVOLTAREA LOCALĂ PLASATĂ SUB RESPONSABILITATEA COMUNITĂTII
                        </p>
                    </div>
                </div>
            </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link className="text-sky-600 hover:text-sky-400" href="/acasa"><Image src={newLogo} alt="gal logo" width={250} height={139} /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
