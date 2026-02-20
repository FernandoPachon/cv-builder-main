import React from "react";
import DatePickerCO from "./Datepickerco";

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
        placeholder="No. Identificación (ej: 1.121.939.448)"
        value={data.identificacion || ""}
        onChange={(e) => setData({ ...data, identificacion: e.target.value })}
      />
      <input
        type="text"
        placeholder="Lugar de Expedición C.C. (ej: Aguazul)"
        value={data.lugarExpedicion || ""}
        onChange={(e) => setData({ ...data, lugarExpedicion: e.target.value })}
      />

      <DatePickerCO
        label="Fecha de Nacimiento"
        value={data.fechaNacimiento}
        onChange={(val) => setData({ ...data, fechaNacimiento: val })}
      />

      <input
        type="text"
        placeholder="Lugar de Nacimiento (ej: Aguazul - Casanare)"
        value={data.lugarNacimiento || ""}
        onChange={(e) => setData({ ...data, lugarNacimiento: e.target.value })}
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
        type="text"
        placeholder="Dirección de Residencia (ej: Calle 22 # 23-22)"
        value={data.direccion || ""}
        onChange={(e) => setData({ ...data, direccion: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Teléfono / Celular"
        value={data.telefono}
        onChange={(e) => setData({ ...data, telefono: e.target.value })}
      />
      <input
        type="text"
        placeholder="Ciudad / Municipio (ej: Aguazul - Casanare)"
        value={data.ubicacion}
        onChange={(e) => setData({ ...data, ubicacion: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
    </section>
  );
}

export default PersonalInfoForm;