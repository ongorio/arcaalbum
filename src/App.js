import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import PreguntaView from './screens/PreguntaView';
import SuccessView from './screens/SuccessView';
import FailView from './screens/FailView';
import HomeView from "./screens/HomeView";
import Album from "./screens/Album";
import NewCardView from "./screens/NewCardView";
import RegisterView from "./screens/RegisterView";
import LoginView from "./screens/LoginView";
import ProfileView from "./screens/ProfileView";

function App() {
  return (
    <Routes>
        <Route path='/' element={<HomeView/>} />
        <Route path='/pregunta' element={<PreguntaView/>} />
        <Route path='success' element={<SuccessView/>} />
        <Route path='/fail' element={<FailView/>} />
        <Route path='/album' element={<Album/>} />
        <Route path='/newcards' element={<NewCardView/>} />
        <Route path={'/registrar'} element={<RegisterView/>} />
        <Route path={'/ingresar'} element={<LoginView/>} />
        <Route path={'/perfil'} element={<ProfileView/>} />
    </Routes>
  );
}

export default App;
