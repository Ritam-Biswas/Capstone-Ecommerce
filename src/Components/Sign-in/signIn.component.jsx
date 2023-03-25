import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInput from "../Form-input/formInput.component";
import Button from "../Button/button.component";
import "./signIn.styles.scss";

const defaultFormFields = {
    email : "",
    password : "",
}

const SignIn = () => {

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
        return;
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email,password);
        } catch (error) {
            console.log(error);
        }

        resetFormFields();
    }

    return(
        <div className="signIn-container">
            <h2>Already have an account</h2>
            <p>Sign In with your email and password</p>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} id="input1"/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} id="input2"/>

                <div className="button-container">
                    <Button type="submit" buttonType="inverted">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={logGoogleUser}>Google Sign In</Button>
                </div>

            </form>
        </div>
    )
}

export default SignIn;