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

export const Button = ({buttonName, buttonType, typeName, onClickHandler}) => {
    
    return (
        <>
        {
            onClickHandler 
                ?
                <button type={type[typeName]} className={`button-container ${button_type[buttonType]}`} onClick={onClickHandler} >{buttonName}</button>
                :
                <button type={type[typeName]} className={`button-container ${button_type[buttonType]}`} >{buttonName}</button>
        }
        </>
    )
}