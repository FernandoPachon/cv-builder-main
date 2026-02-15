import React from "react";

function SkillsSection({ data, setData }) {
  const agregarHabilidad = () => {
    setData({
      ...data,
      habilidades: [
        ...data.habilidades,
        {
          nombre: "",
          nivel: "Intermedio",
        },
      ],
    });
  };

  const actualizarHabilidad = (index, campo, valor) => {
    const nuevasHabilidades = [...data.habilidades];
    nuevasHabilidades[index][campo] = valor;
    setData({ ...data, habilidades: nuevasHabilidades });
  };

  const eliminarHabilidad = (index) => {
    const nuevasHabilidades = data.habilidades.filter((_, i) => i !== index);
    setData({ ...data, habilidades: nuevasHabilidades });
  };

  return (
    <section className="editor-section">
      <h2>⚡ Habilidades</h2>
      {data.habilidades.map((skill, index) => (
        <div key={index} className="skill-card">
          <button
            className="delete-btn"
            onClick={() => eliminarHabilidad(index)}
          >
            ✕
          </button>
          <input
            type="text"
            placeholder="Nombre de la habilidad"
            value={skill.nombre}
            onChange={(e) =>
              actualizarHabilidad(index, "nombre", e.target.value)
            }
          />
          <select
            value={skill.nivel}
            onChange={(e) =>
              actualizarHabilidad(index, "nivel", e.target.value)
            }
          >
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
            <option value="Experto">Experto</option>
          </select>
        </div>
      ))}
      <button className="add-btn" onClick={agregarHabilidad}>
        + Agregar Habilidad
      </button>
    </section>
  );
}

export default SkillsSection;