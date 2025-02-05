import newLogo from "../../../public/helper/gal-logo-new.jpg"
import Image from "next/image";
import Link from "next/link";
import heroBackground from "../../../public/helper/IMG_20200920_125334-small.jpg"


export default function Header() {
    return (
        <div>
            <div className="container navbar bg-base-100 relative z-20"> {/* Ensures navbar has correct stacking context */}
                <div className="navbar-start">
                    <Link className="text-sky-600 hover:text-sky-400" href="/acasa">
                        <Image src={newLogo} alt="gal logo" width={250} height={139} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>GAL</summary>
                                <ul className="p-2">
                                    <li><Link href="/acasa">Structura organizatorica</Link></li>
                                    <li><a>Comisia de selectie a proiectelor</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Teritoriul Microregiunii</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Strategia de dezvoltare locala</a></li>
                        <li><a>Interventii FEADR</a></li>
                    </ul>
                    <div className="dropdown dropdown-end relative"> {/* Make dropdown container relative */}
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow absolute"> {/* Set absolute position and higher z-index */}
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
            <div className="relative w-full">
                <Image
                    src={heroBackground}
                    alt="Hero background"
                    layout="intrinsic"
                    width={2000}
                    height={800}
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
}
