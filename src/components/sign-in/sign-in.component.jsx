import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div className="sign-in container">
            <button onClick={logGoogleUser} type="button" className="btn btn-primary">Sign in GooglePopup</button>
        </div>
    );
};

export default SignIn;