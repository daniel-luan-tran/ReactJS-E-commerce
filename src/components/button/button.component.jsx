import './button.styles.scss';

const button_type = {
    googleSignIn : 'google-sign-in',
    inverted: 'inverted',
    default: ''
}

const type = {
    submit: 'submit',
    button: 'button'
}

export const MyButton = ({buttonName, buttonType, typeName, onClickHandler, otherProps}) => {
    
    return (
        <>
        {
            onClickHandler 
                ?
                <button type={type[typeName]} className={`button-container ${button_type[buttonType]}`} onClick={onClickHandler} {...otherProps} >{buttonName}</button>
                :
                <button type={type[typeName]} className={`button-container ${button_type[buttonType]}`} {...otherProps} >{buttonName}</button>
        }
        </>
    )
}