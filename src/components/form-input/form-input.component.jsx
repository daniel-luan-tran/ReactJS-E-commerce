export const Input = ({inputId, labelName, inputName, inputValue, onChangeHandler, isRequired, helpId, helpText }) => {
    return (
        <>
            <label htmlFor={inputId} className="form-label">{labelName}</label>
            <input type="text" className="form-control" id={inputId} aria-describedby={helpId} name={inputName} value={inputValue} onChange={onChangeHandler} required={isRequired ? true : false}/>
            <div id={helpId} className="form-text">{helpText}</div>
        </>
    )
}