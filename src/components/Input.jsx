import { useState } from "react";
import Button from "./Button";

const InputForm = () => {
  // Estados del InputForm
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");

  // Función antes de enviar el InputForm
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación
    if (!nombre.trim()) {
      setNombre("");
      setError("El campo nombre está vacío");
      return;
    }
    {
      setNombre("Hola " + nombre + "!");
      setContraseña("");
      setError("");
    }
  };

  return (
    <>
      <form className="alert alert-primary formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ingrese nombre..."
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="contraseña"
            placeholder="Ingrese contraseña"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>
        {contraseña === "252525" ? <Button /> : null}
      </form>
      {error && <div>{error}</div>}
  
    </>
  );
};

export default InputForm;
