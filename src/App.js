import './App.css';
import Blog from './blog/Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './blog/Accueil';
import Forum from './blog/Forum';
import Activite from './blog/Activite';
import NousConnaitre from './blog/NousConnaitre';
import Adherer from './blog/Adherer';
import PromouvoirItalien from './blog/PromouvoirItalien';
import Apprendre from './blog/Apprendre';
import Enseigner from './blog/Enseigner';
import Divers from './blog/Divers';
import Contact from './blog/Contact'; // Importez le composant Contact

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
        <Route path="/Contact" element={<Contact />} /> {/* Ajout de cette ligne */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
