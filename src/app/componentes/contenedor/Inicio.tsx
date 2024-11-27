import imageOne from "../../../assets/img/imageOne.jpg";
import imageTwo from "../../../assets/img/ImageTwo.jpg";
import ImageThree from "../../../assets/img/ImageThree.jpg";

export const Inicio = () => {
  return (
    <div
      className="container-fluid pt-5"
      style={{
        backgroundColor: "#FAEBD7",
        minHeight: "100vh",
        paddingBottom: "2rem",
      }}>
      {/* Hero Section */}
      <div
        className="jumbotron text-center"
        style={{
          background: "linear-gradient(135deg, #800000, #A52A2A, #B22222)", 
          color: "#fff",
          borderRadius: "15px",
          padding: "60px 40px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          maxWidth: "850px",
          margin: "0 auto",
        }}>
        <h3
          className="display-4 font-weight-bold"
          style={{
            fontSize: "4rem",
            fontFamily: "'Poppins', sans-serif",
            marginBottom: "20px",
          }}>
          🎬 Películas Star!
        </h3>
        <p
          className="lead"
          style={{
            fontSize: "1.3rem",
            fontWeight: "300",
            fontFamily: "'Roboto', sans-serif",
            marginBottom: "30px",
          }}>
          Gestiona tus películas favoritas con estilo y facilidad.
        </p>
        <hr className="my-4" style={{ borderColor: "#fff", opacity: 0.7 }} />
        <p style={{ fontSize: "1.2rem", fontFamily: "'Roboto', sans-serif" }}>
          🌟 ¡Comienza tu experiencia cinematográfica hoy!
        </p>
      </div>

      {/* Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mt-4"
        data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={imageOne}
              className="d-block mx-auto img-zoom"
              alt="Imagen 1"
              style={{
                width: "100%",
                maxWidth: "25rem",
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.5s ease",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={imageTwo}
              className="d-block mx-auto img-zoom"
              alt="Imagen 2"
              style={{
                width: "100%",
                maxWidth: "25rem",
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.5s ease",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={ImageThree}
              className="d-block mx-auto img-zoom"
              alt="Imagen 3"
              style={{
                width: "100%",
                maxWidth: "25rem",
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.5s ease",
              }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          style={{
            backgroundColor: "#A52A2A",
            borderRadius: "50%",
            width: "2.5rem",
            height: "2.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}>
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ filter: "invert(1)" }}
          />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          style={{
            backgroundColor: "#A52A2A",
            borderRadius: "50%",
            width: "2.5rem",
            height: "2.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}>
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ filter: "invert(1)" }}
          />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};
