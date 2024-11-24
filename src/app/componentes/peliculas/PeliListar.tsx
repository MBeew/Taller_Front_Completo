import { useState } from "react";
import { Pelicula } from "../../modelos/Pelicula";
import { ARREGLO_PELICULAS } from "../../mocks/Pelicula-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomGenero";

export const PeliListar = () => {

  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);

  const obtenerNombre = (valor: string)=>{
    for(const objGene of ARREGLO_PELICULA_GENERO){
      if (objGene.codGenero==valor) {
        return objGene.nombreGenero;
      }
    }
  }

  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre película</th>                
                <th>Protagonista</th>
                <th>Genero</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
            {arrPeliculas.map((miPeli: Pelicula)=>(
                <tr key={miPeli.codGeneroPelicula} className="align-middle">
                <th>{miPeli.codPelicula}</th>
                <td>{miPeli.nombrePelicula}</td>
                <td>{miPeli.protagonistaPelicula}</td>
                <td>{obtenerNombre(miPeli.codGeneroPelicula)}</td>
                <td>
                  <img src={miPeli.imagenPeliculaBase64} alt="no hay" className="imagenListado"/>
                </td>
              </tr>   
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
