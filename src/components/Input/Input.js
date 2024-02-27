
import styles from './Input.module.css';

function Input (props){

    const {
        type = 'text',
        className = null,


    } = props;

    return <input type={type} className={`${styles['input']}`} />
}
export default Input