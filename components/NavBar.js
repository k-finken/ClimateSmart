import { useState } from "react";
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import { initFirebase } from "../firebase/firebaseApp";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    initFirebase()
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    return (
        <nav className="w-full bg-[#f5f7f8]">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <h2 className="text-2xl font-bold text-themeDark hover:text-themeLight hover:cursor-pointer">ClimateSmart</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-themeDark rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-themeDark hover:text-themeLight">
                                <Link href="/videos">Videos</Link>
                            </li>
                            <li className="text-themeDark hover:text-themeLight">
                                <Link href="/tools">Tools</Link>
                            </li>
                            <li className="text-themeDark hover:text-themeLight">
                                <Link href="/faq">Faq</Link>
                            </li>
                            {/* //if not logged in show login */}
                            {!user && <li className="text-themeDark hover:text-themeLight">
                                <Link href="/login">Login</Link>
                            </li>}
                            {/* //if logged in show profile */}
                            {user && <li className="text-themeDark hover:text-themeLight">
                                <Link href="/profile">{user.displayName}</Link>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}