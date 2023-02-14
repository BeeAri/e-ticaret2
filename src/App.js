import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AnaSayfa from "./AnaSayfa";
import Giris from "./Giris";
import Cıkıs from "./Cıkıs";
import Musteri from "./Musteri";
import MusteriYeni from "./MusteriYeni";
import Urun from "./Urun";
import Siparis from "./Siparis";
import Tahsilat from "./Tahsilat";
import Odeme from "./Odeme";
import SiparisDurumu from "./SiparisDurumu";
import Sehir from "./Sehir";
import TahsilatTipi from "./TahsilatTipi";
import UrunKategorisi from "./UrunKategorisi";

function App() {
  return (
<BrowserRouter>
   <Routes>
<Route path="/" element={<AnaSayfa />} />
<Route path="/Giris" element={<Giris />} />
<Route path="/Cıkıs" element={<Cıkıs />} />
<Route path="/Musteri" element={<Musteri />} />
<Route path="/MusteriYeni" element={<MusteriYeni />} />
<Route path="/Urun" element={<Urun />} />
<Route path="/Siparis" element={<Siparis />} />
<Route path="/Tahsilat" element={<Tahsilat />} />
<Route path="/Odeme" element={<Odeme />} />
<Route path="/SiparisDurumu" element={<SiparisDurumu />} />
<Route path="/Sehir" element={<Sehir />} />
<Route path="/TahsilatTipi" element={<TahsilatTipi />} />
<Route path="/UrunKategorisi" element={<UrunKategorisi />} />
   </Routes>
</BrowserRouter>
  )
}

export default App;
