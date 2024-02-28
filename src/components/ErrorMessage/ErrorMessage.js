import styles from './ErrorMessage.module.css';

function ErrorMessage(props){

    return <small className={`${styles['error-message']} ${props.className}`} >
        > {props.children}
    </small>

}

export default ErrorMessage;