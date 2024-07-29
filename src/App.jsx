import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NewCard from "./components/NewCard";
import RenderCards from "./components/RenderCards";
import ParaEmpresas from "./pages/ParaEmpresas";
import SobreNosotros from "./pages/SobreNosotros";
import Suscripcion from "./pages/Suscripcion";
import Tienda from "./pages/Tienda";
import Contacto from "./pages/Contacto";
import PokeSection from "./components/PokeSection";
import PokeContextProvider from "./context/ContextPoke";
import ButtonMorePoke from "./components/ButtonMorePoke";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bbf58a6-1e85-4cfe-83fd-02df6f482b45/de8nlib-6bed7b3d-3d7e-4763-bb60-18f5ee0127fd.png/v1/fill/w_1024,h_652,q_80,strp/background_prairie_pokemon_screencapture_by_nemotrex_de8nlib-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUyIiwicGF0aCI6IlwvZlwvNWJiZjU4YTYtMWU4NS00Y2ZlLTgzZmQtMDJkZjZmNDgyYjQ1XC9kZThubGliLTZiZWQ3YjNkLTNkN2UtNDc2My1iYjYwLTE4ZjVlZTAxMjdmZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZVgNGi61AOkC068E-wphWmAUW8amj0MiJySqDcMCVh8)] bg-cover w-[100%] h-[100%] bg-fixed bg-no-repeat box-border">
      <PokeContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Tienda />} />
            <Route path="/suscripcion" element={<Suscripcion />} />
            <Route path="/paraempresas" element={<ParaEmpresas />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <div>Esto es un footer</div>
        </BrowserRouter>

        <header className="">
          <RenderCards />
        </header>
        {/* <NewCard/> */}
        <PokeSection />
       
      </PokeContextProvider>
    </div>
  );
}

export default App;
