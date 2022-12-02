import {SignUp} from "../sign-up/signup.component"; //export trên function
import SignIn from "../sign-in/sign-in.component"; //export default

export const Auth = () => {
    return (
        <>
        <div className="row" style={{paddingTop: "15px"}}>
            <div className="col-lg-5 mw-100">
                <SignIn />
            </div>
            <div className="col-lg-7 mw-100">
                <SignUp />
            </div>
        </div>
        </>
    );
}