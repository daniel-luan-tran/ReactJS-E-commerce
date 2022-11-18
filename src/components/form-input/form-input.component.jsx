import './form-input.styles.scss';

export const Input = ({inputId, labelName, inputName, inputValue, onChangeHandler, isRequired, helpId, helpText }) => {
    return (
        <div className='group'>
            <label htmlFor={inputId} className={`form-input-label ${inputValue.length > 0 ? 'shrink' : ''}`}>{labelName}</label>
            <input type="text" className="form-input" id={inputId} aria-describedby={helpId} name={inputName} value={inputValue} onChange={onChangeHandler} required={isRequired ? true : false}/>
            <div id={helpId} className="form-text">{helpText}</div>
        </div>
    )
}