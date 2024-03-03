import React  from 'react';
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


    let classes = styles['input'];

    if (!isValid){
        classes += ' ' + styles['invalid'];
    }

    return <input type={type} className={`${classes} ${className}`} ref={ref} placeholder={placeholder} disabled={disabled} />
});
export default Input