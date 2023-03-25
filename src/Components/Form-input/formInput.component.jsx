import "./formInput.styles.scss";


const FormInput = ({label,...otherprops}) => {

    return(
        <div className="form-input-container">
            <label className="form-input-label">{label}</label>
            <input className="form-input" {...otherprops}/>
        </div>
    )
}



export default FormInput;