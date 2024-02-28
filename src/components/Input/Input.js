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
        isValid = true
    } = props;


    let classes = styles['input'];

    if (!isValid){
        classes += ' ' + styles['invalid'];
    }

    return <input type={type} className={`${classes} ${className}`} ref={ref} placeholder={placeholder} />
});
export default Input