
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import Pokemon from './components/Pokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokeUnits, setPokeUnits] = useState(100);

  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?&limit=${pokeUnits}`);


  const api = axios.get(url)
    .then((response) => {
        return response.data;
    })
    .catch((err) => console.log('Falha na requisição \n\n' + err));

  const getData = useCallback(async () => {
      const data = await api;
      setPokemons(data.results)
  }, [])
  
  useEffect(() => {
    getData()
    console.log(pokemons)
  }, [getData, pokemons])

  return (
    <div className="PokemonsContent">
      {pokemons.length !== 0 &&(
        pokemons.map(pokemon => (
          <Pokemon key={pokemon.name} props={pokemon}/>
        ))
      )}
    </div>
  );
}

export default App;
