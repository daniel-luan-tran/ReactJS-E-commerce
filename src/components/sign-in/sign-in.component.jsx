import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const redirectToSignUpHandle = () => {
        window.open("/sign-up", "_self");
    }
    
    const sum = async () => {
        return 'xxx';
    }

    const testAsync = async () => {
        console.log(sum());
        const x = await sum();
        const y = sum();
        console.log(x);
        console.log(y);
    }

    return (
        <>
            <div className="sign-in container">
                <button onClick={logGoogleUser} type="button" className="btn btn-primary">Sign in GooglePopup</button>
                <button onClick={redirectToSignUpHandle} type="button" className="btn btn-primary">Sign up with email and password</button>
                <button onClick={testAsync}>Test Async</button>
            </div>
        </>
    );
};

export default SignIn;