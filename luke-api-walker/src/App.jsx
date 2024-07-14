import "./App.css";
import MenuDesplegable from "./Components/MenuDesplegable/MenuDesplegable";
import CampoDeEntrada from "./Components/CampoDeEntrada/CampoDeEntrada";
import Resultado from "./Components/Resultado/Resultado";
import Error from "./Components/Error/Error";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [resultados, setResultados] = useState({});
  const [error, setError] = useState(null);
  const [searchId, setSearchId] = useState(''); // Estado para el campo de entrada ID

  const handleSearch = async (searchType) => {
    const maxId = searchType === 'people' ? 82 : 60;
    if (searchId < 1 || searchId > maxId) {
      setError(`Please enter a valid ID between 1 and ${maxId}`);
      setResultados({});
      return;
    }

    try {
      const response = await axios.get(`https://swapi.dev/api/${searchType}/${searchId}`);
      setResultados({ ...response.data, tipo: searchType });
      setError(null);
    } catch (err) {
      console.error(err);
      setError("These aren't the droids you're looking for.");
      setResultados({});
    }
  };

  return (
    <Router>
      <div className="App">
        <h2 style={{ fontSize: '1.5em' }}>Search for:</h2>
        <MenuDesplegable recurso={resultados.tipo} setRecurso={setResultados} />
        <div style={{ marginTop: '10px' }}>
          <label style={{ fontSize: '1.2em' }}>ID:</label>
          <CampoDeEntrada id={searchId} setId={setSearchId} />
          <button onClick={() => handleSearch(resultados.tipo)}>Search</button>
        </div>
        <Routes>
          <Route path="/" element={
            error ? (
              <Error />
            ) : (
              resultados.tipo && (
                <Resultado
                  name={resultados.name || resultados.title}
                  by={resultados.birth_year || resultados.climate || resultados.episode_id || resultados.classification || resultados.model}
                  height={resultados.height || resultados.created || resultados.opening_crawl || resultados.designation || resultados.manufacturer}
                  hair={resultados.hair_color || resultados.diameter || resultados.director || resultados.average_height || resultados.cost_in_credits}
                  world={resultados.homeworld || resultados.population || resultados.producer || resultados.skin_colors || resultados.length}
                />
              )
            )
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



