import React, { useContext, useState } from 'react';
import greenlogin from '../../../../public/greenlogin.png'
import Image from 'next/image';
import AuthInputField from '../../Components/AuthInputField';
import AuthButton from '../../Components/AuthButton';
import { AuthChoiceContext } from './authChoiceContext';
import { Login } from '@/lib/accountManagement'; 
import { Alert } from '@mui/material/';
import { useRouter } from 'next/navigation';


const LoginPage = () => {
    const { setWantsLogin } = useContext(AuthChoiceContext);
    const [ showAlert, setShowAlert ] = useState(false);
    const [ LoggedIn, setLoggedIn ] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await Login(event.target[0].value, event.target[1].value);
            setLoggedIn(true);
            setShowAlert(true);
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        } catch (error) {
            console.log("error boy");
            setLoggedIn(false);
            setShowAlert(true);
            if (error.response && error.response.status === 400) {
                console.log('Bad request. Please check your credentials.');
            } else {
                console.log('An error occurred during login:', error);
            }
        }
    };
    
    

    return (
        <div className="flex flex-row items-center h-dvh">
            <div className="w-3/5 h-full overflow-hidden">
                <Image src={greenlogin} alt="Airbnb" className="w-full h-full object-cover" />
            </div>
            <form className="flex flex-col items-center justify-center w-1/2 gap-2 relative" onSubmit={handleSubmit}>
                <AuthInputField type="text" placeholder="Email Address" />
                <AuthInputField type="password" placeholder="Password" />
                <AuthButton placeHolder="Login" />
                <p>Don't have an account? <u className='cursor-pointer' onClick={() => setWantsLogin(false)}>Sign Up</u></p>

                {showAlert && <Alert severity={LoggedIn ? 'success' : "error"} className='absolute -bottom-44 text-nowrap'>{LoggedIn ? "You have successfully logged in!" : "Incorrect Cred"}</Alert>}
            </form>

        </div>
    );
};

export default LoginPage;
