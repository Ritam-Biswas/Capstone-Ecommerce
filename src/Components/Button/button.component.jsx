import "./button.styles.scss";

const Button_Type_Classes = {
    google : "google-sign-in",
    inverted : "inverted"
}

const Button = ({buttonType,...otherprops}) => {
    return (
        <button className={` ${Button_Type_Classes[buttonType]}`} {...otherprops}>
        </button>
    )
}

export default Button;