import { useState } from "react";
import Button from "./Button";

const InputForm = () => {

  // Estados del InputForm
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");

  
  // Función antes de enviar el InputForm
  const validarDatos = (e) => {
    e.preventDefault();

    // Validación
    if (contraseña === "252525") {
      setContraseña(true);
      return;
    }
    {
      setContraseña(false);
      setNombre("");
      setContraseña("");
    }
  };

  return (
    <>
      <form className="alert alert-primary formulario" onSubmit={validarDatos}>
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
    </>
  );
};

export default InputForm;
