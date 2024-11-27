import { useState } from "react";

export const PeliAdmin = () => {
  const [peliculas, setPeliculas] = useState([
    {
      id: 1,
      nombre: "Misión Imposible",
      protagonista: "Tom Cruise",
      genero: "Acción",
    },
    {
      id: 2,
      nombre: "Whiplash",
      protagonista: "Miles Teller",
      genero: "Drama",
    },
    {
      id: 3,
      nombre: "La La Land",
      protagonista: "Ryan Gosling",
      genero: "Drama",
    },
    {
      id: 4,
      nombre: "Gladiador",
      protagonista: "Russell Crowe",
      genero: "Ficción",
    },
    {
      id: 5,
      nombre: "El Conjuro",
      protagonista: "Patrick Wilson",
      genero: "Terror",
    },
  ]);

  // Función para eliminar una película
  const handleEliminar = (id: number) => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar esta película?"
    );
    if (confirmacion) {
      setPeliculas(peliculas.filter((peli) => peli.id !== id)); 
    }
  };

  return (
    <>
      <div
        className="container py-5"
        style={{ backgroundColor: "#F7E4B9", minHeight: "100vh" }}>
        <h2
          className="text-center mb-5"
          style={{
            color: "#8B4F96", 
            fontWeight: "600",
            fontSize: "2rem",
          }}>
          <strong>Administrar Películas</strong>
        </h2>
        <div className="row">
          {peliculas.length > 0 ? (
            peliculas.map((peli) => (
              <div className="col-md-4 mb-4" key={peli.id}>
                <div
                  className="card border-info"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}>
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{
                        color: "#8B4F96", 
                        fontWeight: "600",
                      }}>
                      {peli.nombre}
                    </h5>
                    <p
                      className="card-text"
                      style={{ color: "#555", fontSize: "16px" }}>
                      <strong>Protagonista:</strong> {peli.protagonista} <br />
                      <strong>Género:</strong> {peli.genero}
                    </p>
                    <button
                      className="btn btn-danger"
                      style={{
                        backgroundColor: "#8B4F96", 
                        borderColor: "#8B4F96",
                        padding: "8px 20px",
                      }}
                      onClick={() => handleEliminar(peli.id)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center" style={{ color: "#8B4F96" }}>
              No hay películas registradas.
            </p>
          )}
        </div>
      </div>
    </>
  );
};
