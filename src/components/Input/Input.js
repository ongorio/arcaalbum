import React, { useImperativeHandle, useRef }  from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const {
        type = 'text',
        className = null,
        value = null,
        onChange = null,
        onBlur = null,
        placeholder = null,
        isValid = true,
        disabled = false
    } = props;

    const inputRef = useRef(null);

    let classes = styles['input'];

    if (!isValid){
        classes += ' ' + styles['invalid'];
    }

    useImperativeHandle(ref, () => {
        return {
            changeValue: newValue =>{
                inputRef.current.value = newValue;
            },
            focus: () =>{
                inputRef.current.focus();
            },
            getValue: () =>{
                return inputRef.current.value;
            }
        }
    }, [])

    return <input type={type} className={`${classes} ${className}`} ref={inputRef} placeholder={placeholder} disabled={disabled} />
});
export default Input