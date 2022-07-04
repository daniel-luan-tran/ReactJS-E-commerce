import { useState } from "react";

const defaultFormFields = {
    displayname: "",
    email: "",
    password: "",
    confirmPassword: "",
}

export const SignUp = () => {
    const [state, setState] = useState(defaultFormFields); 
    const {displayname, email, password, confirmPassword} = state;
    console.log(state);
    const handleChange = (e) => {
        debugger
        const {name, value} = e.target;
        setState({...state, [name]:value});
    };

    return (
        <div className="signup row justify-content-center pt-3">
            <div className="col-8 p-5 border">
                <h1>Sign Up</h1>
                <form method="post" action="https://www.google.com/signup" onSubmit={() => {}}>
                    <div className="mb-3">
                        <label htmlFor="InputName"className="form-label">Your name</label>
                        <input type="text" className="form-control" id="InputName" aria-describedby="nameHelp" onChange={handleChange} name="displayname" value={displayname} required/>
                        <div id="nameHelp" className="form-text">Enter your fullname please.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={handleChange} name="email" value={email} required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="InputPassword" onChange={handleChange} name="password" value={password} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="ConfirmPassword" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}