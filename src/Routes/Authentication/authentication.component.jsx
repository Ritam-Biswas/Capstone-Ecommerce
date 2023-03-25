import SignUp from "../../Components/Sign-up/signUp.component";
import SignIn from "../../Components/Sign-in/signIn.component";
import "./authentication.styles.scss";


const Authentication = () => {

    return (
        <div className="form-container">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Authentication;