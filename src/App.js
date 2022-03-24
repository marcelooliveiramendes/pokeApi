
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const api = axios.get(url)
    .then((response) => {
        return response.data.results
    })
    .catch((err) => console.log('Falha na requisição \n\n' + err));

  const getData = useCallback(async () => {
      const data = await api;
      setPokemons(data)
  }, [])
  
  useEffect(() => {
    getData()
    console.log(pokemons)
  }, [getData, pokemons])

  return (
    <div className="App">
      {pokemons.length !== 0 &&(
        pokemons.map(pokemon => (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
            <p>{pokemon.url}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
