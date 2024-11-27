import { useState } from "react";
import { Pelicula } from "../../modelos/Pelicula";
import { ARREGLO_PELICULAS } from "../../mocks/Pelicula-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomGenero";

export const PeliListar = () => {
  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);

  const obtenerNombre = (valor: string) => {
    for (const objGene of ARREGLO_PELICULA_GENERO) {
      if (objGene.codGenero === valor) {
        return objGene.nombreGenero;
      }
    }
  };

  return (
    <>
      <div
        className="container pt-5"
        style={{ backgroundColor: "#F7E4B9", minHeight: "100vh" }}>
        <h2
          className="text-center mb-4"
          style={{
            color: "#8B4F96", 
            fontWeight: "600",
            fontSize: "2rem",
          }}>
          <strong>Lista de Películas</strong>
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <table
              className="table table-bordered table-striped"
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}>
              <thead
                style={{
                  backgroundColor: "#8B4F96", 
                  color: "#fff",
                }}>
                <tr>
                  <th>Código</th>
                  <th>Nombre película</th>
                  <th>Protagonista</th>
                  <th>Género</th>
                  <th>Imagen</th>
                </tr>
              </thead>
              <tbody>
                {arrPeliculas.map((miPeli: Pelicula) => (
                  <tr key={miPeli.codGeneroPelicula} className="align-middle">
                    <th>{miPeli.codPelicula}</th>
                    <td>{miPeli.nombrePelicula}</td>
                    <td>{miPeli.protagonistaPelicula}</td>
                    <td>{obtenerNombre(miPeli.codGeneroPelicula)}</td>
                    <td>
                      <img
                        src={miPeli.imagenPeliculaBase64}
                        alt="no hay"
                        className="imagenListado"
                        style={{
                          width: "100px",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
