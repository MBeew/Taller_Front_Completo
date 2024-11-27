export const PeliCrear = () => {
  return (
    <>
      <div
        className="container pt-5"
        style={{ backgroundColor: "#F7E4B9", minHeight: "100vh" }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2
              className="text-center mb-4"
              style={{
                color: "#8B4F96", 
                fontWeight: "600",
                fontSize: "2rem",
              }}>
              Registrar una nueva <strong>Película</strong>
            </h2>

            <form className="row g-3 needs-validation" noValidate>
 
              <div className="col-md-6">
                <label htmlFor="nomp" className="form-label">
                  Nombre de la película
                </label>
                <input
                  type="text"
                  className="form-control border-info"
                  id="nomp"
                  name="nomp"
                  required
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #8B4F96",
                    padding: "12px",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="dura" className="form-label">
                  Duración
                </label>
                <input
                  type="text"
                  className="form-control border-info"
                  id="dura"
                  name="dura"
                  required
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #8B4F96",
                    padding: "12px",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="prot" className="form-label">
                  Protagonista
                </label>
                <input
                  type="text"
                  className="form-control border-info"
                  id="prot"
                  name="prot"
                  required
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #8B4F96",
                    padding: "12px",
                    fontSize: "1rem",
                  }}
                />
              </div>

   
              <div className="col-md-6">
                <label htmlFor="gene" className="form-label">
                  Género
                </label>
                <select
                  className="form-select border-info"
                  id="gene"
                  name="gene"
                  required
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #8B4F96",
                    padding: "12px",
                    fontSize: "1rem",
                  }}>
                  <option selected disabled value="">
                    Seleccione el género
                  </option>
                  <option>Acción</option>
                  <option>Comedia</option>
                  <option>Drama</option>
                  <option>Terror</option>
                </select>
              </div>

          
              <div className="col-12">
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: "#8B4F96",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 20px",
                    fontSize: "1.1rem",
                    width: "100%",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}>
                  Registrar película
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
