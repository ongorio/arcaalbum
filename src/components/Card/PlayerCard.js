import PlayerPhoto from '../../assets/mbappe.jpg';

import styles from './PlayerCard.module.css';

function PlayerCard(){
    return <div className={`${styles['card']}`}>
        <img src={PlayerPhoto} height={175} width={100} className={`${styles['card-image']}`}/>
        <div>
            <h4 className={`${styles['card-title']}`}>Kylian Mbappe</h4>
            <p className={`${styles['card-text']}`}>
                <strong>Posicion: </strong> Delantero <br/>
                <strong>Equipo: </strong> PSG <br/>
                <strong>Fecha Nacimiento: </strong> Diciembre 20, 1998 <br/>
                <strong>Estatura: </strong> 1.78 m. <br/>
            </p>
        </div>
    </div>
}

export default PlayerCard;