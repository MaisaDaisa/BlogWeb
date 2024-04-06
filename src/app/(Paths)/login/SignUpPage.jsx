import React, { useContext } from "react";
import AuthInputField from "../../Components/AuthInputField";
import AuthButton from "../../Components/AuthButton";
import { AuthChoiceContext } from "./authChoiceContext";
import { createAccount } from "@/lib/accountManagement";
import { updateProfile } from "@/lib/accountManagement";

const SignUpPage = () => {
	const { setWantsLogin } = useContext(AuthChoiceContext);
	const handleSubmit = (event) => {
		event.preventDefault();
		try {
			createAccount(
				event.target[1].value,
				event.target[2].value,
				event.target[0].value
			)
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-row items-center justify-center h-dvh">
			<form
				className="flex flex-col items-center justify-center w-80 gap-3"
				onSubmit={handleSubmit}>
				<AuthInputField
					type="text"
					placeholder="Username"
					addClass={"w-full"}
				/>
				<AuthInputField
					type="text"
					placeholder="Email Address"
					addClass={"w-full"}
				/>
				<AuthInputField
					type="password"
					placeholder="Password"
					addClass={"w-full"}
				/>
				<AuthButton placeHolder="Sign Up" onClick={(e) => loginFunc(e)} />
				<p>
					Already Have an account?{" "}
					<u className="cursor-pointer" onClick={() => setWantsLogin(true)}>
						Login
					</u>
				</p>
			</form>
		</div>
	);
};

export default SignUpPage;
