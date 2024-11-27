export const Acerca = () => {
  return (
    <div
      style={{
        backgroundColor: "#F7E4B9", 
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Roboto', sans-serif",
      }}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2
              className="display-4 text-center mb-4"
              style={{
                color: "#8B4F96", 
                fontWeight: "600",
              }}>
              Acerca de <strong>Peliculas Star</strong>
            </h2>

            <div
              className="card"
              style={{
                borderRadius: "10px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              }}>
              <div
                className="card-header text-white"
                style={{
                  backgroundColor: "#8B4F96",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}>
                <h5 className="card-title">Nuestra Misión</h5>
              </div>
              <div className="card-body">
                <p
                  className="card-text"
                  style={{ fontSize: "1.1rem", color: "#5F4B8B" }}>
                  En <strong>Peliculas Star</strong> nos esforzamos por ofrecer
                  una experiencia única para los amantes del cine. Nuestra
                  misión es ayudarte a gestionar tu colección de películas de
                  forma fácil y divertida. Con nuestra plataforma, puedes
                  agregar, editar y eliminar tus películas favoritas con solo
                  unos clics. Queremos que disfrutes de cada momento
                  cinematográfico.
                </p>
                <a
                  href="/contacto"
                  className="btn"
                  style={{
                    backgroundColor: "#8B4F96",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    fontSize: "1rem",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}>
                  Contacta con nosotros
                </a>
              </div>
            </div>


            <div
              className="card mt-4"
              style={{
                borderRadius: "10px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              }}>
              <div
                className="card-header"
                style={{
                  backgroundColor: "#5F4B8B",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}>
                <h5 className="card-title text-white">¿Cómo Funciona?</h5>
              </div>
              <div className="card-body">
                <p
                  className="card-text"
                  style={{ fontSize: "1.1rem", color: "#5F4B8B" }}>
                  Con nuestra plataforma, puedes gestionar tu catálogo de
                  películas de manera sencilla. Puedes agregar nuevas películas,
                  clasificarlas por género, y obtener información detallada
                  sobre cada una. Además, puedes eliminar o actualizar tus
                  películas favoritas en cualquier momento. Todo está al alcance
                  de tu mano, ¡y con una interfaz súper fácil de usar!
                </p>
                <p
                  className="card-text"
                  style={{ fontSize: "1.1rem", color: "#5F4B8B" }}>
                  Nuestra app también te permite acceder a listas de películas
                  recomendadas, que se actualizan constantemente según tus
                  preferencias. ¡Nunca te quedarás sin ideas para tu próxima
                  película!
                </p>
              </div>
            </div>


            <div className="mt-4">
              <h3
                style={{
                  color: "#8B4F96",
                  fontWeight: "500",
                  textAlign: "center",
                  marginBottom: "20px",
                }}>
                ¿Por qué elegirnos?
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#5F4B8B",
                  textAlign: "center",
                  lineHeight: "1.6",
                }}>
                Peliculas Star no solo es una herramienta para gestionar tus
                películas. Es tu compañero perfecto para el disfrute del cine.
                Ya sea que quieras organizar tu propia colección, descubrir
                nuevos títulos, o mantener todo tu contenido cinematográfico en
                un solo lugar, tenemos lo que necesitas. Además, nuestra
                plataforma se adapta a tus gustos con sugerencias
                personalizadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
