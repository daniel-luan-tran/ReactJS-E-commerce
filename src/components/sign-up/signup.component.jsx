import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { MyInput } from "../form-input/form-input.component";
import { MyButton } from "../button/button.component";
import { UserContext } from "../contexts/user.context";
import { Alert, Snackbar } from "@mui/material";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

export const SignUp = () => {
    const [state, setStateForFormField] = useState(defaultFormFields); //defaultFormFields set defaulf value cho state => truyền destructure (*) (dòng dưới)
    const { displayName, email, password, confirmPassword } = state; //(*)
    const [countDown, setCountDown] = useState(3);
    const [openNotify, setOpenNotify] = useState(false);
    const [typeNotify, setTyeNotify] = useState("success");

    const mess = typeNotify == "success" ? "Logined!" 
    : typeNotify == "error" ? "Wrong username or password!"
    : typeNotify == "warning" ? "Warning!" 
    : typeNotify == "info" ? "Information!" 
    : "Success!";

    const handleChange = (e) => {

        const { name, value } = e.target; //sự kiên onChange => truyền vào destructure từ name và value của thẻ input

        setStateForFormField({ ...state, [name]: value });
        //[name]:value được xử lý động, nếu nhập vào displayName là Luan => ['displayName']: 'Luan' => truyền vào destructure (*) => defaultFormFields.displayName = value

        //này giống như setState trong kiểu class
        //defaultFormFields['displayName'] = value;
        //Kiểu cũ: setState({...state})
    };

    //const {currentUser, setCurrentUser} = useContext(UserContext);

    const isPasswordMatched = async (event) => {
        if (password != confirmPassword)
            return false;
        else
            return true;
    }

    const resetFormField = () => {
        setStateForFormField(defaultFormFields);
    }

    const signInRedirect = () => {
        let __countDown = 3;
        setCountDown(3);
        setInterval(() => {
            __countDown = __countDown - 1;
            setCountDown(__countDown)
            if(__countDown == 0) {
                window.location = "/";
            }
        }, 1000);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenNotify(false);
    };

    const triggerNotify = (isOpen, type) => {
        setTyeNotify(type);
        setOpenNotify(isOpen);
    };

    const handleSubmit = async () => {
        const isMatch = await isPasswordMatched();
        if (isMatch) {
            try {
                const { user } = await createAuthUserWithEmailAndPassword(email, password);
                //setCurrentUser(user);
                await createUserDocumentFromAuth(user, { displayName });
                triggerNotify(true, "success");
                signInRedirect()
                resetFormField();
            } catch (error) {
                if (error.code == 'auth/email-already-in-use') {
                    alert('Email already in use!');
                }
            }
        } else {
            alert("Confirm password is not matched!");
        }
    }

    return (
        <>
            <Snackbar open={openNotify} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"center" }}>
                <Alert onClose={handleClose} severity={typeNotify} sx={{ width: '100%' }}>
                    {
                        typeNotify == "success" 
                        ? 
                        <>
                        After {countDown}s, we will redirect to Home or <a href="/">go right now</a>
                        </>
                        : 
                        mess
                    }
                </Alert>
            </Snackbar>
            <div className="signup row justify-content-center pt-3">
                <div className="col-8 p-5  w-90">
                    <h1>Sign Up</h1>
                    <form method="post" onSubmit={(event) => {
                        event.preventDefault(); //Để đảm bảo rằng form chỉ xử lý bằng sự kiện của mình, nếu không có dòng này, form thay vì return nếu password không match thì nó sẽ submit luôn theo mặc định
                        handleSubmit();
                    }}>
                        <div className="mb-3">
                            <MyInput typeName='text' inputId='InputName' labelName='Your name' inputName='displayName' inputValue={displayName} onChangeHandler={handleChange} isRequired={true} helpId='nameHelp' helpText='Enter your fullname please.' />
                        </div>
                        <div className="mb-3">
                            <MyInput typeName='email' inputId='InputEmailSignUp' labelName='Email address' inputName='email' inputValue={email} onChangeHandler={handleChange} isRequired={true} helpId='emailHelp' helpText="We'll never share your email with anyone else." />
                        </div>
                        <div className="mb-3">
                        <MyInput typeName='password' inputId='InputPasswordSignUp' labelName='Password' inputName='password' inputValue={password} onChangeHandler={handleChange} isRequired={true} helpId='' helpText="" />
    
                        <MyInput typeName='password' inputId='ConfirmPassword' labelName='Confirm Password' inputName='confirmPassword' inputValue={confirmPassword} onChangeHandler={handleChange} isRequired={true} helpId='' helpText="" />
    
                        </div>
                        <MyButton buttonName={'Sign up'} buttonType={'default'} />
                    </form>
                </div>
            </div>
        </>
    );
}