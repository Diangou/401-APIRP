import './App.css';
import Blog from './blog/Blog'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Technology from './blog/Technology';
import Design from './blog/design';
import Culture from './blog/culture';
import Business from './blog/business';
import Politics from './blog/politics';
import Opinion from './blog/opinion';
import Science from './blog/science';
import Health from './blog/health';
import Style from './blog/style';
import Travel from './blog/Travel';






function App() {
  return (

<BrowserRouter>
      <Routes>
       
       <Route index element={<Blog/>}/>
       <Route path="Technology" element={<Technology />} />
       <Route path="Travel" element={<Travel />} />
       <Route path="Design" element={<Design />} />
       <Route path="Culture" element={<Culture />} />
       <Route path="Business" element={<Business />} />
       <Route path="Politics" element={<Politics />} />
       <Route path="Opinion" element={<Opinion />} />
       <Route path="Science" element={<Science />} />
       <Route path="Health" element={<Health />} />
       <Route path="Style" element={<Style />} />
       <Route path="Travel" element={<Travel />} />
  
        
      </Routes>
    </BrowserRouter>
 );
}

export default App;