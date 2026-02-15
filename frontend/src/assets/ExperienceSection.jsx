import React from "react";

function ExperienceSection({ data, setData }) {
  const agregarExperiencia = () => {
    setData({
      ...data,
      experiencia: [
        ...data.experiencia,
        {
          puesto: "",
          empresa: "",
          fechaInicio: "",
          fechaFin: "",
          descripcion: "",
        },
      ],
    });
  };

  const actualizarExperiencia = (index, campo, valor) => {
    const nuevaExperiencia = [...data.experiencia];
    nuevaExperiencia[index][campo] = valor;
    setData({ ...data, experiencia: nuevaExperiencia });
  };

  const eliminarExperiencia = (index) => {
    const nuevaExperiencia = data.experiencia.filter((_, i) => i !== index);
    setData({ ...data, experiencia: nuevaExperiencia });
  };

  return (
    <section className="editor-section">
      <h2>🏢 Experiencia Laboral</h2>
      {data.experiencia.map((exp, index) => (
        <div key={index} className="item-card">
          <button
            className="delete-btn"
            onClick={() => eliminarExperiencia(index)}
          >
            ✕
          </button>
          <input
            type="text"
            placeholder="Puesto"
            value={exp.puesto}
            onChange={(e) =>
              actualizarExperiencia(index, "puesto", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Empresa"
            value={exp.empresa}
            onChange={(e) =>
              actualizarExperiencia(index, "empresa", e.target.value)
            }
          />
          <div className="date-row">
            <input
              type="text"
              placeholder="Fecha inicio (ej: Ene 2020)"
              value={exp.fechaInicio}
              onChange={(e) =>
                actualizarExperiencia(index, "fechaInicio", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Fecha fin (ej: Actual)"
              value={exp.fechaFin}
              onChange={(e) =>
                actualizarExperiencia(index, "fechaFin", e.target.value)
              }
            />
          </div>
          <textarea
            placeholder="Descripción de responsabilidades y logros"
            value={exp.descripcion}
            onChange={(e) =>
              actualizarExperiencia(index, "descripcion", e.target.value)
            }
            rows="3"
          />
        </div>
      ))}
      <button className="add-btn" onClick={agregarExperiencia}>
        + Agregar Experiencia
      </button>
    </section>
  );
}

export default ExperienceSection;