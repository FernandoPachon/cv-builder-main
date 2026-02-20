import React from "react";
import DatePickerCO from "./Datepickerco";

function EducationSection({ data, setData }) {
  const agregar = () => {
    setData({
      ...data,
      educacion: [
        ...data.educacion,
        { titulo: "", institucion: "", tipo: "", grado: "", lugar: "", fechaInicio: "", fechaFin: "", descripcion: "" },
      ],
    });
  };

  const actualizar = (index, campo, valor) => {
    const nueva = [...data.educacion];
    nueva[index][campo] = valor;
    setData({ ...data, educacion: nueva });
  };

  const eliminar = (index) => {
    setData({ ...data, educacion: data.educacion.filter((_, i) => i !== index) });
  };

  return (
    <section className="editor-section">
      <h2>🎓 Educación</h2>
      {data.educacion.map((edu, index) => (
        <div key={index} className="item-card">
          <button className="delete-btn" onClick={() => eliminar(index)}>×</button>
          <input
            type="text"
            placeholder="Tipo (ej: ESTUDIOS SECUNDARIOS, COMPLEMENTARIOS)"
            value={edu.tipo || ""}
            onChange={(e) => actualizar(index, "tipo", e.target.value)}
          />
          <input
            type="text"
            placeholder="Institución"
            value={edu.institucion || ""}
            onChange={(e) => actualizar(index, "institucion", e.target.value)}
          />
          <input
            type="text"
            placeholder="Título o Certificación"
            value={edu.titulo || ""}
            onChange={(e) => actualizar(index, "titulo", e.target.value)}
          />
          <input
            type="text"
            placeholder="Grado (ej: Once (11°) Grado)"
            value={edu.grado || ""}
            onChange={(e) => actualizar(index, "grado", e.target.value)}
          />
          <input
            type="text"
            placeholder="Lugar / Ciudad"
            value={edu.lugar || ""}
            onChange={(e) => actualizar(index, "lugar", e.target.value)}
          />
          <div className="date-row">
            <DatePickerCO
              label="Fecha inicio"
              value={edu.fechaInicio || ""}
              onChange={(val) => actualizar(index, "fechaInicio", val)}
            />
            <DatePickerCO
              label="Fecha fin"
              value={edu.fechaFin || ""}
              onChange={(val) => actualizar(index, "fechaFin", val)}
            />
          </div>
          <textarea
            placeholder="Descripción (opcional)"
            value={edu.descripcion || ""}
            onChange={(e) => actualizar(index, "descripcion", e.target.value)}
            rows="2"
          />
        </div>
      ))}
      <button className="add-btn" onClick={agregar}>+ Agregar Educación</button>
    </section>
  );
}

export default EducationSection;