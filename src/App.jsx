import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import AllPlayers from "./components/AllPlayers"
import SinglePlayer from "./components/SinglePlayer"
import NewPlayerForm from './components/NewPlayerForm'



function App() {
  return (
    <div>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllPlayers />}  />
        <Route path='/players/:id' element={<SinglePlayer />}  />
        <Route path='/new-player' element={<NewPlayerForm />} />
      </Routes>
    </BrowserRouter>

   
    </div>            

  );
}

export default App;
