import noencontrado from "../../../assets/img/noencontrado.jpg";

export const NoEncontrado = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7E4B9", // Fondo color suave (caqui)
        minHeight: "100vh", // Para que ocupe todo el alto de la pantalla
        padding: "20px",
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif", // Tipografía moderna
      }}>
      <img
        style={{
          width: "200px", 
          height: "200px", 
          objectFit: "cover", 
          marginBottom: "30px",
          borderRadius: "50%", 
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        }}
        src={noencontrado}
        alt="Página no encontrada"
      />
      <p
        style={{
          fontSize: "22px",
          fontWeight: "500",
          marginBottom: "30px",
          color: "#5F4B8B", 
        }}>
        La página seleccionada no se ha encontrado
      </p>
      <button
        style={{
          padding: "12px 25px",
          fontSize: "18px",
          backgroundColor: "#8B4F96", 
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease", 
        }}
        type="button"
        onClick={() => (window.location.href = "/")}>
        Volver al Inicio
      </button>
    </div>
  );
};
