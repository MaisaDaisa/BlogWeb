"use client";

import { useState } from "react";
import { AuthChoiceContext } from "./authChoiceContext";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";



const page = () => {
	const [wantsLogin, setWantsLogin] = useState(true);
	return (
		<AuthChoiceContext.Provider value={{wantsLogin, setWantsLogin}} className="flex flex-col justify-center items-center min-h-dvh">
			{wantsLogin ? (
				<>
					<LoginPage  />
				</>
			) : (
				<>
					<SignUpPage />
				</>
			)}
		</AuthChoiceContext.Provider>
	);
};

export default page;
