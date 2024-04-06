import React, { useContext } from 'react';
import greenlogin from '../../../../public/greenlogin.png'
import Image from 'next/image';
import AuthInputField from '../../Components/AuthInputField';
import AuthButton from '../../Components/AuthButton';
import { AuthChoiceContext } from './authChoiceContext';
import { Login } from '@/lib/accountManagement'; // Assuming Login is a function that returns a promise

const LoginPage = () => {
    const { setWantsLogin } = useContext(AuthChoiceContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await Login(event.target[0].value, event.target[1].value)
        } catch (error) {
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
            <form className="flex flex-col items-center justify-center w-1/2 gap-2" onSubmit={handleSubmit}>
                <AuthInputField type="text" placeholder="Email Address" />
                <AuthInputField type="password" placeholder="Password" />
                <AuthButton placeHolder="Login" />
                <p>Don't have an account? <u className='cursor-pointer' onClick={() => setWantsLogin(false)}>Sign Up</u></p>
            </form>
        </div>
    );
};

export default LoginPage;
