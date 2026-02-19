import React from "react";

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

function formatearFecha(valorISO) {
  if (!valorISO) return "";
  const [anio, mes, dia] = valorISO.split("-");
  return `${parseInt(dia)} de ${MESES[parseInt(mes) - 1]} de ${anio}`;
}

function fechaAISO(textoFecha) {
  // Convierte "5 de noviembre de 1996" → "1996-11-05" para el input
  if (!textoFecha || textoFecha.includes("-")) return textoFecha;
  const match = textoFecha.match(/(\d+) de (\w+) de (\d{4})/i);
  if (!match) return "";
  const dia = match[1].padStart(2, "0");
  const mes = (MESES.indexOf(match[2].toLowerCase()) + 1).toString().padStart(2, "0");
  return `${match[3]}-${mes}-${dia}`;
}

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
      <label style={{fontSize:"13px", fontWeight:"600", color:"#34495e", marginBottom:"4px", display:"block"}}>
        Fecha de Nacimiento
      </label>
      <input
        type="date"
        value={fechaAISO(data.fechaNacimiento)}
        onChange={(e) => setData({ ...data, fechaNacimiento: formatearFecha(e.target.value) })}
        style={{marginBottom:"12px"}}
      />
      {data.fechaNacimiento && (
        <small style={{display:"block", marginTop:"-8px", marginBottom:"12px", color:"#7f8c8d", fontSize:"12px"}}>
          📅 Se guardará como: <strong>{data.fechaNacimiento}</strong>
        </small>
      )}
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