import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import { Input } from "../form-input/form-input.component";
import { Button } from "../button/button.component";
import { async } from "@firebase/util";

const defaultFormFields = {
    email: "",
    password: "",
}

const SignIn = () => {
    const [state, setStateForFormField] = useState(defaultFormFields); //defaultFormFields set defaulf value cho state => truyền destructure (*) (dòng dưới)
    const { email, password } = state; //(*)
    console.log(state);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const redirectToSignUpHandle = () => {
        window.open("/sign-up", "_self");
    }

    const redirectToHomePageHandle = () => {
        window.open("/home", "_self");
    }

    const handleLoginSubmit = async () => {
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(user);
        } catch (error) {
            if (error.code == 'auth/wrong-password') {
                alert('Wrong password!');
            } else if (error.code == 'auth/user-not-found') {
                alert('Wrong user email!');
            } else {
                alert('Log in failed!')
            }
            console.log(error);
        }
    }

    const handleChange = (e) => {

        const { name, value } = e.target; //sự kiên onChange => truyền vào destructure từ name và value của thẻ input

        setStateForFormField({ ...state, [name]: value });
        //[name]:value được xử lý động, nếu nhập vào displayname là Luan => ['displayname']: 'Luan' => truyền vào destructure (*) => defaultFormFields.displayname = value

        //này giống như setState trong kiểu class
        //defaultFormFields['displayname'] = value;
        //Kiểu cũ: setState({...state})
    };
    const resetFormField = () => {
        setStateForFormField(defaultFormFields);
    }

    return (
        <>
        <div className="sign-in">
            <div className="row justify-content-center pt-3">
                <div className="col-8 p-5  w-90">
                    <h1>Sign In</h1>
                    <h2>Already have an account?</h2>
                    <form method="post" onSubmit={(event) => {
                        event.preventDefault(); //Để đảm bảo rằng form chỉ xử lý bằng sự kiện của mình, nếu không có dòng này, form thay vì return nếu password không match thì nó sẽ submit luôn theo mặc định
                        handleLoginSubmit();
                    }}>
                        <div className="mb-3">
                            <Input inputId='InputEmail' labelName='Email address' inputName='email' inputValue={email} onChangeHandler={handleChange} isRequired={true} helpId='emailHelp' helpText="We'll never share your email with anyone else." />
                        </div>
                        <div className="mb-3">
                            <Input inputId='InputPassword' labelName='Password' inputName='password' inputValue={password} onChangeHandler={handleChange} isRequired={true} helpId='' helpText="" />
                        </div>
                        <div className="row" style={{justifyContent: 'space-between'}}>
                            <div className="col col-lg-5 col-md-5 col-sm-5 col-xs-5" style={{display: 'flex', justifyContent: 'center'}}><Button buttonName={'Sign in'} buttonType={'default'} typeName='submit' /></div>
                            <div className="col col-lg-5 col-md-5 col-sm-5 col-xs-5" style={{display: 'flex', justifyContent: 'center'}}><Button buttonName={'Google Sign in'} buttonType={'googleSignIn'} typeName={'button'} onClickHandler={logGoogleUser} /></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignIn;