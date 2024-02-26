import styles from './Footer.module.css';

import ArcaLogo from '../../assets/arcalogo.png'

function Footer (){
    return (
        <div className={`${styles['footer']}`}>
            <div className={`m-container ${styles['footer-content']}`}>
                <div>
                    <img src={ArcaLogo} height={50} width={100} />
                    <br/>
                    <strong>2024</strong>
                </div>
            </div>
        </div>
    )
}

export default Footer