import React from "react";

function PersonalInfoForm({ data, setData }) {
  return (
    <section className="editor-section">
      <h2>📋 Información Personal</h2>
      <input
        type="text"
        placeholder="Nombres"
        value={data.nombre}
        onChange={(e) => setData({ ...data, nombre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Apellidos"
        value={data.apellidos}
        onChange={(e) => setData({ ...data, apellidos: e.target.value })}
      />
      <input
        type="text"
        placeholder="Cédula (ej: 1.234.567.890)"
        value={data.cedula}
        onChange={(e) => setData({ ...data, cedula: e.target.value })}
      />
      <input
        type="text"
        placeholder="Fecha de Nacimiento (ej: 15 de Marzo de 1990)"
        value={data.fechaNacimiento}
        onChange={(e) => setData({ ...data, fechaNacimiento: e.target.value })}
      />
      <select
        value={data.estadoCivil}
        onChange={(e) => setData({ ...data, estadoCivil: e.target.value })}
      >
        <option value="Soltero">Soltero/a</option>
        <option value="Casado">Casado/a</option>
        <option value="Unión Libre">Unión Libre</option>
        <option value="Divorciado">Divorciado/a</option>
        <option value="Viudo">Viudo/a</option>
      </select>
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Teléfono / Celular"
        value={data.telefono}
        onChange={(e) => setData({ ...data, telefono: e.target.value })}
      />
      <input
        type="text"
        placeholder="Dirección de Residencia"
        value={data.ubicacion}
        onChange={(e) => setData({ ...data, ubicacion: e.target.value })}
      />
      <input
        type="text"
        placeholder="Ciudad"
        value={data.ciudad}
        onChange={(e) => setData({ ...data, ciudad: e.target.value })}
      />
    </section>
  );
}

export default PersonalInfoForm;