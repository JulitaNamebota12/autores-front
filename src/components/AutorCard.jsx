import axios from 'axios';

function AutorCard({ autor, setAutorEditando, cargarAutores }) {
  const eliminar = async () => {
    if (window.confirm('¿Eliminar autor?')) {
      await axios.delete(`https://autores-yopl.onrender.com/api/autores/${autor.id}`);
      cargarAutores();
    }
  };

  return (
    <div className="autor-card">
      <h3>{autor.nombre}</h3>
      <img src={`https://autores-yopl.onrender.com${autor.imagenUrl}`} alt={autor.nombre} />
      <p>{autor.biografia}</p>
      <button onClick={() => setAutorEditando(autor)}>Editar</button>
      <button onClick={eliminar}>Eliminar</button>
    </div>
  );
}

export default AutorCard;
