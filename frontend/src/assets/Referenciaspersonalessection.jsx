import React from "react";

function ReferenciasPersonalesSection({ data, setData }) {
  const agregar = () => {
    setData({
      ...data,
      referenciasPersonales: [
        ...(data.referenciasPersonales || []),
        { nombre: "", ocupacion: "", telefono: "", lugar: "" },
      ],
    });
  };

  const actualizar = (index, campo, valor) => {
    const nuevas = [...data.referenciasPersonales];
    nuevas[index][campo] = valor;
    setData({ ...data, referenciasPersonales: nuevas });
  };

  const eliminar = (index) => {
    setData({
      ...data,
      referenciasPersonales: data.referenciasPersonales.filter((_, i) => i !== index),
    });
  };

  return (
    <section className="editor-section">
      <h2>🤝 Referencias Personales</h2>
      {(data.referenciasPersonales || []).map((ref, index) => (
        <div key={index} className="item-card">
          <button className="delete-btn" onClick={() => eliminar(index)}>×</button>
          <input
            type="text"
            placeholder="Nombre completo"
            value={ref.nombre || ""}
            onChange={(e) => actualizar(index, "nombre", e.target.value)}
          />
          <input
            type="text"
            placeholder="Ocupación"
            value={ref.ocupacion || ""}
            onChange={(e) => actualizar(index, "ocupacion", e.target.value)}
          />
          <input
            type="tel"
            placeholder="Celular"
            value={ref.telefono || ""}
            onChange={(e) => actualizar(index, "telefono", e.target.value)}
          />
          <input
            type="text"
            placeholder="Lugar / Ciudad"
            value={ref.lugar || ""}
            onChange={(e) => actualizar(index, "lugar", e.target.value)}
          />
        </div>
      ))}
      <button className="add-btn" onClick={agregar}>
        + Agregar Referencia Personal
      </button>
    </section>
  );
}

export default ReferenciasPersonalesSection;