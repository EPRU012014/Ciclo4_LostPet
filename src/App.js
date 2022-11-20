import {
  BrowserRouter,
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import "./style/App.css";
import BarraDeNav from "./components/BarraDeNav";
import Carrusele from "./components/Carrusele";
import EsferasInfo from "./components/EsferasInfo";
import LinkPolitica from "./components/LinkPolitica";
import ListadoAdopcion from "./components/ListadoAdopcion";
import Perrito from "./components/Perrito";
import { InicioSesion } from "./pages/InicioSesion";
import { Registro } from "./pages/Registro";
import { Home } from "./pages/Home";
import {Adopcion} from "./pages/Adopcion";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="inicioSesion" element={<InicioSesion />} />
          <Route path="registro" element={<Registro />} />
          <Route path="adoptar" element={<Adopcion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
