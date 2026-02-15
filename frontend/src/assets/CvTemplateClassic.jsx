import React from "react";

function CVTemplateClassic({ data }) {
  return (
    <div className="hoja-vida-colombiana">
      {/* PÁGINA 1 - HOJA DE VIDA */}
      <div className="hv-page hv-page-1">
        <div className="hv-header">
          <h1>Hoja de Vida</h1>
        </div>
        <div className="hv-name-banner">
          <h2>
            {data.nombre && data.apellidos
              ? `${data.nombre} ${data.apellidos}`
              : "Nombre Completo"}
          </h2>
        </div>

        <div className="hv-photo-section">
          <div className="hv-photo-placeholder">
            <span>📷</span>
            <p>Foto 3x4</p>
          </div>
          <div className="hv-contact-box">
            <p>
              <strong>CC:</strong> {data.cedula || "1.234.567.890"}
            </p>
            <p>
              <strong>Cel:</strong> {data.telefono || "321 123 4567"}
            </p>
            <p>
              <strong>Email:</strong> {data.email || "correo@ejemplo.com"}
            </p>
          </div>
        </div>
      </div>

      {/* PÁGINA 2 - DATOS PERSONALES */}
      <div className="hv-page hv-page-2">
        <div className="hv-section-title">
          <h3>DATOS PERSONALES</h3>
        </div>
        <table className="hv-table">
          <tbody>
            <tr>
              <td className="hv-label">NOMBRES:</td>
              <td>{data.nombre || "NOMBRES"}</td>
            </tr>
            <tr>
              <td className="hv-label">APELLIDOS:</td>
              <td>{data.apellidos || "APELLIDOS"}</td>
            </tr>
            <tr>
              <td className="hv-label">TIPO DE DOCUMENTO:</td>
              <td>Cédula de Ciudadanía</td>
            </tr>
            <tr>
              <td className="hv-label">FECHA NACIMIENTO:</td>
              <td>{data.fechaNacimiento || "01 de Enero 1990"}</td>
            </tr>
            <tr>
              <td className="hv-label">IDENTIFICACIÓN:</td>
              <td>C.C. N° {data.cedula || "1.234.567.890"}</td>
            </tr>
            <tr>
              <td className="hv-label">ESTADO CIVIL:</td>
              <td>{data.estadoCivil}</td>
            </tr>
            <tr>
              <td className="hv-label">RESIDENCIA:</td>
              <td>{data.ubicacion || "Calle 123 #45-67"}</td>
            </tr>
            <tr>
              <td className="hv-label">CIUDAD:</td>
              <td>{data.ciudad || "Bogotá"}</td>
            </tr>
            <tr>
              <td className="hv-label">CELULAR:</td>
              <td>{data.telefono || "321 123 4567"}</td>
            </tr>
            <tr>
              <td className="hv-label">CORREO:</td>
              <td>{data.email || "correo@ejemplo.com"}</td>
            </tr>
          </tbody>
        </table>

        <div className="hv-section-title">
          <h3>INFORMACIÓN ACADÉMICA</h3>
        </div>
        {data.educacion.length > 0 ? (
          data.educacion.map((edu, index) => (
            <table key={index} className="hv-table hv-small-margin">
              <tbody>
                <tr>
                  <td className="hv-label">ESTUDIOS REALIZADOS:</td>
                  <td>{edu.titulo}</td>
                </tr>
                <tr>
                  <td className="hv-label">LUGAR:</td>
                  <td>{edu.institucion}</td>
                </tr>
                <tr>
                  <td className="hv-label">COMPLEMENTARIOS:</td>
                  <td>{edu.descripcion || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <table className="hv-table">
            <tbody>
              <tr>
                <td className="hv-label">ESTUDIOS REALIZADOS:</td>
                <td>CENTRO DE EDUCACIÓN LABORAL EL REFUGIO</td>
              </tr>
              <tr>
                <td className="hv-label">LUGAR:</td>
                <td>Bogotá</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* PÁGINA 3 - EXPERIENCIA LABORAL */}
      <div className="hv-page hv-page-3">
        <div className="hv-section-title">
          <h3>EXPERIENCIA LABORAL</h3>
        </div>
        {data.experiencia.length > 0 ? (
          data.experiencia.map((exp, index) => (
            <table key={index} className="hv-table hv-small-margin">
              <tbody>
                <tr>
                  <td className="hv-label">EMPRESA:</td>
                  <td>{exp.empresa}</td>
                </tr>
                <tr>
                  <td className="hv-label">CARGO DESEMPEÑADO:</td>
                  <td>{exp.puesto}</td>
                </tr>
                <tr>
                  <td className="hv-label">TIEMPO LABORADO:</td>
                  <td>
                    {exp.fechaInicio} - {exp.fechaFin}
                  </td>
                </tr>
                <tr>
                  <td className="hv-label">CELULAR:</td>
                  <td>{data.telefono}</td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <table className="hv-table">
            <tbody>
              <tr>
                <td className="hv-label">EMPRESA:</td>
                <td>PAMELA Y RESTAURANTE LOS PORTALES</td>
              </tr>
              <tr>
                <td className="hv-label">CARGO DESEMPEÑADO:</td>
                <td>Mesera</td>
              </tr>
            </tbody>
          </table>
        )}

        <div className="hv-section-title">
          <h3>REFERENCIAS PERSONALES</h3>
        </div>
        <table className="hv-table">
          <tbody>
            <tr>
              <td className="hv-label">NOMBRE:</td>
              <td>FERNANDO PACHÓN MORENO</td>
            </tr>
            <tr>
              <td className="hv-label">OCUPACIÓN:</td>
              <td>Docente</td>
            </tr>
            <tr>
              <td className="hv-label">TELÉFONO:</td>
              <td>321 234 5678</td>
            </tr>
            <tr>
              <td className="hv-label">CIUDAD:</td>
              <td>Bogotá - Colombia</td>
            </tr>
          </tbody>
        </table>

        <table className="hv-table hv-small-margin">
          <tbody>
            <tr>
              <td className="hv-label">NOMBRE:</td>
              <td>LUZ DEISY MORENO OJEDA</td>
            </tr>
            <tr>
              <td className="hv-label">OCUPACIÓN:</td>
              <td>Ama de casa</td>
            </tr>
            <tr>
              <td className="hv-label">TELÉFONO:</td>
              <td>310 456 7890</td>
            </tr>
            <tr>
              <td className="hv-label">CIUDAD:</td>
              <td>Bogotá - Colombia</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* PÁGINA 4 - MÁS REFERENCIAS */}
      <div className="hv-page hv-page-4">
        <div className="hv-section-title">
          <h3>REFERENCIAS FAMILIARES</h3>
        </div>
        <table className="hv-table">
          <tbody>
            <tr>
              <td className="hv-label">NOMBRE:</td>
              <td>LIGIA MABEL BONILLA VEGA</td>
            </tr>
            <tr>
              <td className="hv-label">OCUPACIÓN:</td>
              <td>Operaria</td>
            </tr>
            <tr>
              <td className="hv-label">CIUDAD:</td>
              <td>Bogotá</td>
            </tr>
            <tr>
              <td className="hv-label">CELULAR:</td>
              <td>321 098 7654</td>
            </tr>
          </tbody>
        </table>

        <table className="hv-table hv-small-margin">
          <tbody>
            <tr>
              <td className="hv-label">NOMBRE:</td>
              <td>CLAUDIA VEGA CAMERO</td>
            </tr>
            <tr>
              <td className="hv-label">OCUPACIÓN:</td>
              <td>Ama de casa</td>
            </tr>
            <tr>
              <td className="hv-label">CIUDAD:</td>
              <td>Bogotá</td>
            </tr>
            <tr>
              <td className="hv-label">CELULAR:</td>
              <td>320 765 4321</td>
            </tr>
          </tbody>
        </table>

        <div className="hv-footer">
          <p>
            {data.nombre && data.apellidos
              ? `${data.nombre} ${data.apellidos}`
              : "NOMBRE COMPLETO"}
          </p>
          <p>
            C.C. N° {data.cedula || "1.234.567.890"}{" "}
            {data.ciudad || "Villavicencio"}
          </p>
        </div>
      </div>

      {/* PÁGINA 5 - DOCUMENTOS DE IDENTIDAD */}
      <div className="hv-page hv-page-5">
        <div className="hv-section-title">
          <h3>DOCUMENTOS DE IDENTIDAD</h3>
        </div>

        <div className="hv-documents-grid">
          <div className="hv-document-card">
            <div className="hv-document-placeholder cedula-frente">
              <p>📄 CÉDULA</p>
              <p className="small">Frente</p>
            </div>
          </div>

          <div className="hv-document-card">
            <div className="hv-document-placeholder cedula-reverso">
              <p>📄 CÉDULA</p>
              <p className="small">Reverso</p>
            </div>
          </div>
        </div>
      </div>

      {/* PÁGINA 6 - CERTIFICADOS Y VACUNACIÓN */}
      <div className="hv-page hv-page-6">
        <div className="hv-section-title">
          <h3>CERTIFICADOS Y DOCUMENTOS ADICIONALES</h3>
        </div>

        <div className="hv-documents-grid">
          <div className="hv-document-card">
            <div className="hv-document-placeholder carnet-vacunas">
              <p>💉 CARNET DE VACUNACIÓN</p>
              <p className="small">MiVacuna</p>
            </div>
          </div>

          <div className="hv-document-card">
            <div className="hv-document-placeholder certificado">
              <p>📜 CERTIFICADOS</p>
              <p className="small">Laborales/Académicos</p>
            </div>
          </div>
        </div>

        <div className="hv-note">
          <p>
            <strong>Nota:</strong> Los documentos escaneados deben ser legibles
            y en formato PDF o imagen de alta calidad.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CVTemplateClassic;