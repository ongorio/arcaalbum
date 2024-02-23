import PlayerCard from "../components/Card/PlayerCard";


const players = [
    {id: 1, name: 'Hugo Lloris', team: 'Totenham', birthdate: '26 Diciembre 1986', height: '1.88 m'},
    {id: 2, name: 'Samuel Umtiti', team: 'Barcelona', birthdate: '14 Noviembre 1993', height: '1.84 m'},
    {id: 3, name: 'Raphael Varane', team: 'Real Madrid', birthdate: '25 Abril 1993', height: '1.91 m'},
    {id: 4, name: 'Benjamin Pavard', team: 'Stutgart', birthdate: '28 Marzo 1996', height: '1.86 m'},
    {id: 5, name: 'Lucas Hernandez', team: 'Atletico Madrid', birthdate: '14 Febrero 1996', height: '1.84 m'},
    {id: 6, name: 'Ngolo Kante', team: 'Chelsea', birthdate: '29 Marzo 1991', height: '1.68 m'},
    {id: 7, name: 'Paul Pogba', team: 'Manchester United', birthdate: '15 Marzo 1993', height: '1.91 m'},
    {id: 8, name: 'Blaise Matuidi', team: 'Juventus', birthdate: '9 Abril 1987', height: '1.80 m'},
    {id: 9, name: 'Kylian Mbappe', team: 'PSG', birthdate: '20 Diciembre 1998', height: '1.78'},
    {id: 10, name: 'Antoine Griezman', team: 'Atletico Madrid', birthdate: '', height: ''},
    {id: 11, name: 'Olivier Giroud', team: '', birthdate: '', height: ''},
]

function Album(){
    return <PlayerCard/>
}

export default Album;