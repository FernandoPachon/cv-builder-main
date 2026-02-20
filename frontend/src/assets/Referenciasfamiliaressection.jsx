import React from "react";

function ReferenciasFamiliaresSection({ data, setData }) {
  const agregar = () => {
    setData({
      ...data,
      referenciasFamiliares: [
        ...(data.referenciasFamiliares || []),
        { nombre: "", ocupacion: "", telefono: "", lugar: "" },
      ],
    });
  };

  const actualizar = (index, campo, valor) => {
    const nuevas = [...data.referenciasFamiliares];
    nuevas[index][campo] = valor;
    setData({ ...data, referenciasFamiliares: nuevas });
  };

  const eliminar = (index) => {
    setData({
      ...data,
      referenciasFamiliares: data.referenciasFamiliares.filter((_, i) => i !== index),
    });
  };

  return (
    <section className="editor-section">
      <h2>👨‍👩‍👧 Referencias Familiares</h2>
      {(data.referenciasFamiliares || []).map((ref, index) => (
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
        + Agregar Referencia Familiar
      </button>
    </section>
  );
}

export default ReferenciasFamiliaresSection;