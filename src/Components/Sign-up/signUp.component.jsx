import { useState } from "react";
import { createUserDocumentFromEmailandPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInput from "../Form-input/formInput.component";
import Button from "../Button/button.component";
import "./signUp.styles.scss";

const defaultFormFields = {
    displayName : "",
    email : "",
    password : "",
    confirmPassword : ""
}

const SignUp = () => {

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
        return;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        try{
            const response = await createUserDocumentFromEmailandPassword(email, password);
            await createUserDocumentFromAuth(response.user,{Name:displayName});
            resetFormFields();
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("Cannot create user, email already in use")
            }else{
                console.log(error);
            }
        }

    }

    return(
        <div className="signUp-container">
            <h2>Don't have an account ?</h2>
            <p>Sign Up with your email and password</p>
            <form onSubmit={handleSubmit}>

                <FormInput label="Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <div className="button-container">
                    <Button type="submit" buttonType="inverted">Sign Up</Button>
                </div>

            </form>
        </div>
    )
}

export default SignUp;