import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { GifGrid } from './componentes/GifGrid';

function App() {

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState('');

  const onSetCaegory = ( evt ) => {
    setCategoria( evt.target.value )
  }

  const onAddCategory = () => {
    setCategorias( [...categorias, categoria ])
  }


  return (
    <>
      <input type="text" value={categoria} onChange={ ( event ) => onSetCaegory( event ) } />
      <button onClick={ () => onAddCategory() }> Agregar </button>

      {
        categorias.map( (category, key) => {
          return (
            <GifGrid key={key} category={category} />
          )
        })
      }
    </>
  );
}

export default App;
