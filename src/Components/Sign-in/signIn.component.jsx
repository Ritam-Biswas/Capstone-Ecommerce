import { useState, useContext } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInput from "../Form-input/formInput.component";
import Button from "../Button/button.component";
import "./signIn.styles.scss";
import { UserContext } from "../../Contexts/user.context";

const defaultFormFields = {
    email : "",
    password : "",
}

const SignIn = () => {

    const {setCurrentUser} = useContext(UserContext)

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
        const response = await signInWithGooglePopup();
        await createUserDocumentFromAuth(response.user);
    }

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user);
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

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <div className="button-container">
                    <Button type="submit" buttonType="inverted">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={logGoogleUser}>Google Sign In</Button>
                </div>

            </form>
        </div>
    )
}

export default SignIn;