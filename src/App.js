import './App.css';
import Blog from './blog/Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './blog/Accueil'; // Correction ici
import Forum from './blog/Forum'; // Correction ici
import Activite from './blog/Activite'; // Correction ici
import NousConnaitre from './blog/NousConnaitre'; // Correction ici
import Adherer from './blog/Adherer'; // Correction ici
import PromouvoirItalien from './blog/PromouvoirItalien'; // Correction ici
import Apprendre from './blog/Apprendre'; // Correction ici
import Enseigner from './blog/Enseigner'; // Correction ici
import Divers from './blog/Divers'; // Correction ici

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Blog />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Activite" element={<Activite />} />
        <Route path="/NousConnaitre" element={<NousConnaitre />} />
        <Route path="/Adherer" element={<Adherer />} />
        <Route path="/PromouvoirItalien" element={<PromouvoirItalien />} />
        <Route path="/Apprendre" element={<Apprendre />} />
        <Route path="/Enseigner" element={<Enseigner />} />
        <Route path="/Divers" element={<Divers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
