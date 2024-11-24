export const NoEncontrado = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
        src="src/assets/img/noencontrado.jpg"
        alt="Página no encontrada"
      />
      <p style={{ fontSize: "20px", marginBottom: "20px" }}>
        La página seleccionada no se ha encontrado
      </p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        type="button"
        onClick={() => (window.location.href = "/")}
      >
        Volver al Inicio
      </button>
    </div>
  );
};
