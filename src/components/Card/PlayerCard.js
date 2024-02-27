import styles from './PlayerCard.module.css';

function PlayerCard(props){

    const { playerName, position, team, birthdate, height, playerPhoto, countryClass } = props;

    const cardStyle = countryClass + '-card';

    return <div className={`${styles['card']} ${styles[cardStyle]}`}>
        <img src={playerPhoto} height={175} width={100} className={`${styles['card-image']}`}/>
        <div>
            <h4 className={`${styles['card-title']}`}>{playerName}</h4>
            <p className={`${styles['card-text']}`}>
                <strong>Posicion: </strong> {position} <br/>
                <strong>Equipo: </strong> {team} <br/>
                <strong>Fecha Nacimiento: </strong> {birthdate} <br/>
                <strong>Estatura: </strong> {height} <br/>
            </p>
        </div>
    </div>
}

export default PlayerCard;