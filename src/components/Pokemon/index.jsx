import axios from 'axios';
import { useState } from 'react';

export const  Pokemon = ({props}) =>  {
    const [imgUrl, setImgUrl] = useState('')

    axios.get(props.url)
        .then((res) => {
            setImgUrl(res.data.sprites.front_default)
            return res.data.sprites.front_default
        })
        .catch(err => console.log('Falha ao pegar a imagem '+ err))

    return (
        <div>
            <img src={imgUrl} alt={imgUrl} />
            <h1>{props.name}</h1>
        </div>
    );
}

export default Pokemon;