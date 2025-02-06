import newLogo from "../../../public/helper/gal-logo-new.jpg"
import Image from "next/image";
import Link from "next/link";
import heroBackground from "../../../public/helper/IMG_20200920_125334-small.jpg"
import caretDown from "../../../public/helper/caret-down.svg"

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
                    <ul className="menu menu-horizontal px-1">
                        <div className="m-1 flex"><Link href="/acasa">Acasa</Link></div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} className=" m-1 flex">GAL<Image alt="down" width={16} height={16} src={caretDown} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><Link href="/acasa">Structura organizatorica</Link></li>
                                <li><Link href="/acasa">Comisia de selectie a proiectelor</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} className=" m-1 flex">Teritoriul Microregiunii<Image alt="down" width={16} height={16} src={caretDown} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><Link href="/acasa">Submenu 1</Link></li>
                                <li><Link href="/acasa">Submenu 2</Link></li>
                            </ul>
                        </div>
                        <div className="m-1 flex"><Link href="/acasa">Strategia de dezvoltare locala</Link></div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} className=" m-1 flex">Interventii FEADR<Image alt="down" width={16} height={16} src={caretDown} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><Link href="/acasa">Submenu 1</Link></li>
                                <li><Link href="/acasa">Submenu 2</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} className=" m-1 flex">Interventii FSE+<Image alt="down" width={16} height={16} src={caretDown} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><Link href="/acasa">Submenu 1</Link></li>
                                <li><Link href="/acasa">Submenu 2</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} className=" m-1 flex">Finantare proiecte<Image alt="down" width={16} height={16} src={caretDown} /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><Link href="/acasa">Submenu 1</Link></li>
                                <li><Link href="/acasa">Submenu 2</Link></li>
                            </ul>
                        </div>
                        <div className="m-1 flex"><Link href="/contact">Contact</Link></div>
                    </ul>
                </div>
                <div className="navbar-end lg:hidden lg:w-0">
                    <div className="dropdown dropdown-end relative"> {/* Make dropdown container relative */}
                        <div tabIndex={0} role="button" className="btn btn-ghost ">
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow absolute"> {/* Set absolute position and higher z-index */}
                            <li><Link href="/acasa">Acasa</Link></li>
                            <li>
                                <span className="menu-title">GAL</span>
                                <ul className="p-2">
                                    <li><Link href="/acasa">Structura organizatorica</Link></li>
                                    <li><Link href="/acasa">Comisia de selectie a proiectelor</Link></li>
                                </ul>
                            </li>
                            <li>
                                <span className="menu-title">Teritoriul Microregiunii</span>
                                <ul className="p-2">
                                    <li><Link href="/acasa">Submenu 1</Link></li>
                                    <li><Link href="/acasa">Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/acasa">Strategia de dezvoltare locala</Link></li>
                            <li>
                                <span className="menu-title">Interventii FEADR</span>
                                <ul className="p-2">
                                    <li><Link href="/acasa">Submenu 1</Link></li>
                                    <li><Link href="/acasa">Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li>
                                <span className="menu-title">Interventii FSE+</span>
                                <ul className="p-2">
                                    <li><Link href="/acasa">Submenu 1</Link></li>
                                    <li><Link href="/acasa">Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li>
                                <span className="menu-title">Finantare proiecte</span>
                                <ul className="p-2">
                                    <li><Link href="/acasa">Submenu 1</Link></li>
                                    <li><Link href="/acasa">Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/contact">Contact</Link></li>
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
        </div >
    );
}
