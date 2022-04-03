import { render } from "react-dom";
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tv } from "./components/TV/Tv";
import { Movies } from "./components/Movies/Movies";
import { Card3 } from "./components/PageOfCards/Card3/Card3";
import { Card2 } from "./components/PageOfCards/Card2/Card2";
import Card1 from "./components/PageOfCards/Card1/Card1";
import { Card4 } from "./components/PageOfCards/Card4/Card4";



const rootElement = document.getElementById("root");


render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="movies" element={<Movies />} />
      <Route path="tv" element={<Tv />} />
      <Route path="card1" element={<Card1 />} />
      <Route path="card2" element={<Card2 />} />
      <Route path="card3" element={<Card3 />} />
      <Route path="card4" element={<Card4 />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)


