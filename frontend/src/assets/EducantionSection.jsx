import React from "react";

function EducationSection({ data, setData }) {
  const agregarEducacion = () => {
    setData({
      ...data,
      educacion: [
        ...data.educacion,
        {
          titulo: "",
          institucion: "",
          fechaInicio: "",
          fechaFin: "",
          descripcion: "",
        },
      ],
    });
  };

  const actualizarEducacion = (index, campo, valor) => {
    const nuevaEducacion = [...data.educacion];
    nuevaEducacion[index][campo] = valor;
    setData({ ...data, educacion: nuevaEducacion });
  };

  const eliminarEducacion = (index) => {
    const nuevaEducacion = data.educacion.filter((_, i) => i !== index);
    setData({ ...data, educacion: nuevaEducacion });
  };

  return (
    <section className="editor-section">
      <h2>🎓 Educación</h2>
      {data.educacion.map((edu, index) => (
        <div key={index} className="item-card">
          <button
            className="delete-btn"
            onClick={() => eliminarEducacion(index)}
          >
            ✕
          </button>
          <input
            type="text"
            placeholder="Título o Certificación"
            value={edu.titulo}
            onChange={(e) =>
              actualizarEducacion(index, "titulo", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Institución"
            value={edu.institucion}
            onChange={(e) =>
              actualizarEducacion(index, "institucion", e.target.value)
            }
          />
          <div className="date-row">
            <input
              type="text"
              placeholder="Fecha inicio"
              value={edu.fechaInicio}
              onChange={(e) =>
                actualizarEducacion(index, "fechaInicio", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Fecha fin"
              value={edu.fechaFin}
              onChange={(e) =>
                actualizarEducacion(index, "fechaFin", e.target.value)
              }
            />
          </div>
          <textarea
            placeholder="Descripción (opcional)"
            value={edu.descripcion}
            onChange={(e) =>
              actualizarEducacion(index, "descripcion", e.target.value)
            }
            rows="2"
          />
        </div>
      ))}
      <button className="add-btn" onClick={agregarEducacion}>
        + Agregar Educación
      </button>
    </section>
  );
}

export default EducationSection;