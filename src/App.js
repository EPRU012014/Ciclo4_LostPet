import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import React from "react";
import "./style/App.css";


import { InicioSesion } from "./pages/InicioSesion";
import { Registro } from "./pages/Registro";
import { Home } from "./pages/Home";
import CrearPerro from "./pages/Adopcion";
import EditPerrito from "./pages/Editar-perrito";
import PerritoList from "./pages/Lista-perrito";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="inicioSesion" element={<InicioSesion />} />
          <Route path="registro" element={<Registro />} />
          <Route path="adoptar" element={<CrearPerro />} />
          <Route path="/perrito-list" element={<PerritoList />} />
          <Route path="/edit-perrito/:id" element={<EditPerrito />} />
          <Route path="/" element={<CrearPerro />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
