import React from "react";

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

// "1996-11-05" → "5 de noviembre de 1996"
export function formatearFecha(valorISO) {
  if (!valorISO) return "";
  const [anio, mes, dia] = valorISO.split("-");
  if (!anio || !mes || !dia) return "";
  return `${parseInt(dia)} de ${MESES[parseInt(mes) - 1]} de ${anio}`;
}

// "5 de noviembre de 1996" → "1996-11-05"
export function fechaAISO(textoFecha) {
  if (!textoFecha) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(textoFecha)) return textoFecha;
  const match = textoFecha.match(/(\d{1,2}) de (\w+) de (\d{4})/i);
  if (!match) return "";
  const dia = match[1].padStart(2, "0");
  const mes = (MESES.indexOf(match[2].toLowerCase()) + 1).toString().padStart(2, "0");
  return `${match[3]}-${mes}-${dia}`;
}

/**
 * DatePickerCO — date picker con salida en formato colombiano
 * Props:
 *   label        — etiqueta visible encima del input
 *   value        — valor actual en formato "5 de noviembre de 1996"
 *   onChange     — función que recibe el nuevo valor ya formateado
 *   allowActualmente — si es true, muestra toggle "Actualmente"
 */
function DatePickerCO({ label, value, onChange, allowActualmente = false }) {
  const esActualmente = value === "Actualmente";

  return (
    <div style={{ marginBottom: "12px" }}>
      {label && (
        <label style={{
          fontSize: "13px",
          fontWeight: "600",
          color: "#34495e",
          marginBottom: "6px",
          display: "block"
        }}>
          {label}
        </label>
      )}

      {/* Toggle "Actualmente" — solo si allowActualmente=true */}
      {allowActualmente && (
        <label style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
          cursor: "pointer",
          fontSize: "13px",
          color: esActualmente ? "#27ae60" : "#7f8c8d",
          fontWeight: esActualmente ? "600" : "normal"
        }}>
          <input
            type="checkbox"
            checked={esActualmente}
            onChange={(e) => onChange(e.target.checked ? "Actualmente" : "")}
            style={{ width: "16px", height: "16px", cursor: "pointer", accentColor: "#27ae60" }}
          />
          Actualmente
        </label>
      )}

      {/* Date picker — se oculta si está marcado "Actualmente" */}
      {!esActualmente && (
        <input
          type="date"
          value={fechaAISO(value)}
          onChange={(e) => onChange(formatearFecha(e.target.value))}
          style={{
            width: "100%",
            padding: "10px 12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            fontSize: "14px",
            fontFamily: "inherit"
          }}
        />
      )}

      {/* Indicador del valor guardado */}
      {value && !esActualmente && (
        <small style={{ display: "block", marginTop: "4px", color: "#7f8c8d", fontSize: "12px" }}>
          📅 {value}
        </small>
      )}
    </div>
  );
}

export default DatePickerCO;