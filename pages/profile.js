import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { initFirebase } from '../firebase/firebaseApp';


export default function Profile() {
    const auth = getAuth();
    const router = useRouter()
    const [user, loading] = useAuthState(auth);

    const signOut = (e) => {
        e.preventDefault()
        auth.signOut();
        router.push("/");
    }


    return (
        <>
            <NavBar/>
                <div className='bg-[#f5f7f8]'>
                    <div className='w-full flex justify-center items-center bg-[#f5f7f8]'>
                        <h1 className="text-3xl font-bold text-themeDark">Profile page</h1>
                    </div>
                    <div className='w-full flex justify-center items-center bg-[#f5f7f8]'>
                        <p className="text-center mt-10 text-xl font-bold max-w-xl text-themeDark">Welcome to your ClimateSmart Profile! Use the navbar to explore all that ClimateSmart has to offer!</p>
                    </div>
                    <div className='mt-10 w-full flex justify-center items-center'>
                        <button onClick={signOut} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-themeDark border hover:text-themeDark transition border-themeDark rounded-lg hover:bg-themeLightest focus:ring-4 focus:ring-gray-100">Sign Out</button>
                    </div>
                    <div className="h-96"></div>
                    <div className="h-56"></div>
                </div>
            <Footer/>
        </>
    )
}