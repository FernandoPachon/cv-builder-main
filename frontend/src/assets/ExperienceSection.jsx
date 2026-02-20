import React from "react";
import DatePickerCO from "./Datepickerco";

function ExperienceSection({ data, setData }) {
  const agregar = () => {
    setData({
      ...data,
      experiencia: [
        ...data.experiencia,
        { empresa: "", jefe: "", cargo: "", fechaInicio: "", fechaFin: "", lugar: "", telefono: "", descripcion: "" },
      ],
    });
  };

  const actualizar = (index, campo, valor) => {
    const nueva = [...data.experiencia];
    nueva[index][campo] = valor;
    setData({ ...data, experiencia: nueva });
  };

  const eliminar = (index) => {
    setData({ ...data, experiencia: data.experiencia.filter((_, i) => i !== index) });
  };

  return (
    <section className="editor-section">
      <h2>🏢 Experiencia Laboral</h2>
      {data.experiencia.map((exp, index) => (
        <div key={index} className="item-card">
          <button className="delete-btn" onClick={() => eliminar(index)}>×</button>
          <input
            type="text"
            placeholder="Empresa"
            value={exp.empresa || ""}
            onChange={(e) => actualizar(index, "empresa", e.target.value)}
          />
          <input
            type="text"
            placeholder="Jefe Inmediato"
            value={exp.jefe || ""}
            onChange={(e) => actualizar(index, "jefe", e.target.value)}
          />
          <input
            type="text"
            placeholder="Cargo / Puesto"
            value={exp.cargo || exp.puesto || ""}
            onChange={(e) => actualizar(index, "cargo", e.target.value)}
          />
          <div className="date-row">
            <DatePickerCO
              label="Fecha inicio"
              value={exp.fechaInicio || ""}
              onChange={(val) => actualizar(index, "fechaInicio", val)}
            />
            <DatePickerCO
              label="Fecha fin"
              value={exp.fechaFin || ""}
              onChange={(val) => actualizar(index, "fechaFin", val)}
              allowActualmente={true}
            />
          </div>
          <input
            type="text"
            placeholder="Lugar / Ciudad"
            value={exp.lugar || ""}
            onChange={(e) => actualizar(index, "lugar", e.target.value)}
          />
          <input
            type="tel"
            placeholder="Celular de contacto empresa"
            value={exp.telefono || ""}
            onChange={(e) => actualizar(index, "telefono", e.target.value)}
          />
          <textarea
            placeholder="Descripción de responsabilidades (opcional)"
            value={exp.descripcion || ""}
            onChange={(e) => actualizar(index, "descripcion", e.target.value)}
            rows="3"
          />
        </div>
      ))}
      <button className="add-btn" onClick={agregar}>+ Agregar Experiencia</button>
    </section>
  );
}

export default ExperienceSection;