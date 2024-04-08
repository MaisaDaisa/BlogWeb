import React, { useContext } from "react";
import AuthInputField from "../../Components/AuthInputField";
import AuthButton from "../../Components/AuthButton";
import { AuthChoiceContext } from "./authChoiceContext";
import { createAccount } from "@/lib/accountManagement";
import { Alert } from "@mui/material/";

const SignUpPage = () => {
	const { setWantsLogin } = useContext(AuthChoiceContext);
	const [showAlert, setShowAlert] = React.useState(false);
	const [signedUp, setSignedUp] = React.useState(false);
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await createAccount(
				event.target[1].value,
				event.target[2].value,
				event.target[0].value
			);
			console.log("Account Created");
			setSignedUp(true);
			setShowAlert(true);
			setTimeout(() => {
				setWantsLogin(true);
			}, 2000);
		} catch (error) {
			console.log(error);
			setShowAlert(true);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-dvh relative">
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
			{showAlert && (
					<Alert severity={ signedUp ? "success" : 'error'} className="relative -bottom-20">
						{signedUp ? "Login Successful. Redirecting..." : "Error Signing Up. Please try again."}
					</Alert>
				)}
		</div>
	);
};

export default SignUpPage;
