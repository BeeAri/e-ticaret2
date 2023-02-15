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
import UrunYeni from "./UrunYeni";
import Siparis from "./Siparis";
import SiparisYeni from "./SiparisYeni";
import Tahsilat from "./Tahsilat";
import TahsilatYeni from "./TahsilatYeni";
import Odeme from "./Odeme";
import OdemeYeni from "./OdemeYeni";
import SiparisDurumu from "./SiparisDurumu";
import SiparisDurumuYeni from "./SiparisDurumuYeni";
import Sehir from "./Sehir";
import SehirYeni from "./SehirYeni";
import TahsilatTipi from "./TahsilatTipi";
import TahsilatTipiYeni from "./TahsilatTipiYeni";
import UrunKategorisi from "./UrunKategorisi";
import UrunKategorisiYeni from "./UrunKategorisiYeni";

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
<Route path="/UrunYeni" element={<UrunYeni />} />
<Route path="/Siparis" element={<Siparis />} />
<Route path="/SiparisYeni" element={<SiparisYeni />} />
<Route path="/Tahsilat" element={<Tahsilat />} />
<Route path="/TahsilatYeni" element={<TahsilatYeni />} />
<Route path="/Odeme" element={<Odeme />} />
<Route path="/OdemeYeni" element={<OdemeYeni />} />
<Route path="/SiparisDurumu" element={<SiparisDurumu />} />
<Route path="/SiparisDurumuYeni" element={<SiparisDurumuYeni />} />
<Route path="/Sehir" element={<Sehir />} />
<Route path="/SehirYeni" element={<SehirYeni />} />
<Route path="/TahsilatTipi" element={<TahsilatTipi />} />
<Route path="/TahsilatTipiYeni" element={<TahsilatTipiYeni />} />
<Route path="/UrunKategorisi" element={<UrunKategorisi />} />
<Route path="/UrunKategorisiYeni" element={<UrunKategorisiYeni />} />
   </Routes>
</BrowserRouter>
  )
}

export default App;
