
import styles from './Button.module.css';

function Button(props){
    const {
        onClick,
        disabled = false,
        btnType=null,
        className = null,
        type = 'button'
    } = props

    let classes = className + ` ${styles['btn']}`;
    let btnStyles;

    if (btnType != null && btnType.includes('btn-ch')) classes += ` ${styles['btn-ch']}`;
    if (btnType != null && btnType.includes('btn-no-background')) classes += ` ${styles['btn-no-background']}`;

    return <button className={classes} onClick={onClick} disabled={disabled} type={type}>
        {props.children}
    </button>
}

export default Button;