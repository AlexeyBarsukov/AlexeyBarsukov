import { render } from "react-dom";
import App from './App';
import { store } from './components/app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { Tv } from "./components/TV/Tv";
import { Movies } from "./components/Movies/Movies";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tv" element={<Tv />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);


