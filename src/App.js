import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AnaSayfa from "./AnaSayfa";
import Musteri from "./Musteri";
import Urun from "./Urun";

function App() {
  return (
<BrowserRouter>
   <Routes>
<Route path="/" element={<AnaSayfa />} />
<Route path="/Musteri" element={<Musteri />} />
<Route path="/Urun" element={<Urun />} />
   </Routes>
</BrowserRouter>
  )
}

export default App;
