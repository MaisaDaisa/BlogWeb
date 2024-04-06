import SubmitForm from "./SubmitForm";
import { auth } from "@/lib/firebase";

const page = () => {
    console.log(auth);
	return (
		<div className="w-full flex justify-center ">
			<SubmitForm />
		</div>
	);
};

export default page;
