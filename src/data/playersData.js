import franceFlag from "../assets/franceflage.png";
import mexicoFlag from "../assets/mexicoflag.jpg";
import questionCard from "../assets/questionmark.jpg";
import PlayerPhoto from '../assets/mbappe.jpg';

export const countries = [
    {id: 2, name: 'Mexico', flag: mexicoFlag, countryClass: 'mexico'},
    {id: 1, name: 'France', flag: franceFlag, countryClass: 'france'}

]

export const players = {
    1: [
        {id: 1, name: 'Hugo Lloris', team: 'Totenham', birthdate: '26 Diciembre 1986', height: '1.88 m', pos: 'portero', image: PlayerPhoto},
        {id: 2, name: 'Samuel Umtiti', team: 'Barcelona', birthdate: '14 Noviembre 1993', height: '1.84 m', pos: 'defensa', image: PlayerPhoto},
        {id: 3, name: 'Raphael Varane', team: 'Real Madrid', birthdate: '25 Abril 1993', height: '1.91 m', pos: 'defensa', image: PlayerPhoto},
        {id: 4, name: 'Benjamin Pavard', team: 'Stutgart', birthdate: '28 Marzo 1996', height: '1.86 m', pos: 'defensa', image: PlayerPhoto},
        {id: 5, name: 'Lucas Hernandez', team: 'Atletico Madrid', birthdate: '14 Febrero 1996', height: '1.84 m', pos:'defensa', image: PlayerPhoto},
        {id: 6, name: 'Ngolo Kante', team: 'Chelsea', birthdate: '29 Marzo 1991', height: '1.68 m', pos: 'medio', image: PlayerPhoto},
        {id: 7, name: 'Paul Pogba', team: 'Manchester United', birthdate: '15 Marzo 1993', height: '1.91 m', pos: 'medio', image: PlayerPhoto},
        {id: 8, name: 'Blaise Matuidi', team: 'Juventus', birthdate: '9 Abril 1987', height: '1.80 m', pos: 'medio', image: PlayerPhoto},
        {id: 9, name: 'Kylian Mbappe', team: 'PSG', birthdate: '20 Diciembre 1998', height: '1.78', pos: 'delantero', image: PlayerPhoto},
        {id: 10, name: 'Antoine Griezman', team: 'Atletico Madrid', birthdate: '21 Marzo 1991', height: '1.76 m', pos: 'delantero', image: PlayerPhoto},
        {id: 11, name: 'Olivier Giroud', team: 'Arsenal', birthdate: '30 Septiembre 1986', height: '1.93 m', pos: 'delantero', image: PlayerPhoto},
    ],
    2: [
        {id: 12, name: 'Guillermo Ochoa', team: 'Standar Liege', birthdate: '13 Julio 1985', height: '1.85 m', pos: 'portero', image: questionCard},
        {id: 13, name: 'Javier Aquino', team: 'Tigres UANL', birthdate: '11 Febrero 1990', height: '1.65 m', pos: 'defensa', image: questionCard},
        {id: 14, name: 'Rafael Marquez', team: 'Atlas', birthdate: '13 Febrero 1979', height: '1.85 m', pos: 'defensa', image: questionCard},
        {id: 15, name: 'Hector Moreno', team: 'Real Sociedad', birthdate: '17 Enero 1988', height: '1.82 m', pos: 'defensa', image: questionCard},
        {id: 16, name: 'Miguel Layun', team: 'Sevilla', birthdate: '25 Junio 1988', height: '1.79 m', pos: 'defensa', image: questionCard},
        {id: 17, name: 'Edson Alvarez', team: 'America', birthdate: '24 Octubre 1997', height: '1.87 m', pos: 'defensa', image: questionCard},
        {id: 18, name: 'Andres Guardado', team: 'Real Betis', birthdate: '28 Septiembre 1986', height: '1.69 m', pos: 'medio', image: questionCard},
        {id: 19, name: 'Hector Herrera', team: 'FC Porto', birthdate: '19 Abril 1990', height: '1.85 m', pos: 'medio', image: questionCard},
        {id: 20, name: 'Javier Hernandez', team: 'West Ham', birthdate: '1 Junio 1988', height: '1,75 m', pos: 'delantero', image: questionCard},
        {id: 21, name: 'Hirving Lozano', team: 'PSV', birthdate: '30 Julio 1995', height: '1.74 m', pos: 'delantero', image: questionCard},
        {id: 22, name: 'Carlos Vela', team: 'LA FC', birthdate: '1 Marzo 1989', height: '1.77 m', pos: 'delantero', image: questionCard},

    ]
}