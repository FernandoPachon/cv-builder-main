import React from "react";

function CVTemplateModern({ data }) {
  return (
    <>
      {/* Header */}
      <div className="cv-header">
        <h1>{data.nombre && data.apellidos ? `${data.nombre} ${data.apellidos}` : data.nombre || "Tu Nombre"}</h1>
        <div className="cv-contact">
          {data.email && <span>📧 {data.email}</span>}
          {data.telefono && <span>📱 {data.telefono}</span>}
          {data.ubicacion && <span>📍 {data.ubicacion}</span>}
        </div>
      </div>

      {/* Perfil */}
      {data.perfil && (
        <div className="cv-section">
          <h2>Perfil Profesional</h2>
          <p>{data.perfil}</p>
        </div>
      )}

      {/* Experiencia */}
      {data.experiencia.length > 0 && (
        <div className="cv-section">
          <h2>Experiencia Laboral</h2>
          {data.experiencia.map((exp, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <h3>{exp.puesto}</h3>
                <span className="cv-date">
                  {exp.fechaInicio} - {exp.fechaFin}
                </span>
              </div>
              <h4>{exp.empresa}</h4>
              <p>{exp.descripcion}</p>
            </div>
          ))}
        </div>
      )}

      {/* Educación */}
      {data.educacion.length > 0 && (
        <div className="cv-section">
          <h2>Educación</h2>
          {data.educacion.map((edu, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <h3>{edu.titulo}</h3>
                <span className="cv-date">
                  {edu.fechaInicio} - {edu.fechaFin}
                </span>
              </div>
              <h4>{edu.institucion}</h4>
              {edu.descripcion && <p>{edu.descripcion}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Habilidades */}
      {data.habilidades.length > 0 && (
        <div className="cv-section">
          <h2>Habilidades</h2>
          <div className="cv-skills">
            {data.habilidades.map((skill, index) => (
              <div key={index} className="cv-skill">
                <span className="skill-name">{skill.nombre}</span>
                <span className="skill-level">{skill.nivel}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Anexos / Documentos */}
      {(data.cedulaFrente ||
        data.cedulaReverso ||
        data.carnetVacunas ||
        data.certificados.length > 0) && (
        <div className="cv-section">
          <h2>Anexos y Documentos</h2>
          <div className="cv-documents-grid-modern">
            {data.cedulaFrente && (
              <div className="cv-document-item">
                <h4>Cédula (Frente)</h4>
                <img
                  src={data.cedulaFrente}
                  alt="Cédula Frente"
                  className="cv-document-img-modern"
                />
              </div>
            )}
            {data.cedulaReverso && (
              <div className="cv-document-item">
                <h4>Cédula (Reverso)</h4>
                <img
                  src={data.cedulaReverso}
                  alt="Cédula Reverso"
                  className="cv-document-img-modern"
                />
              </div>
            )}
            {data.carnetVacunas && (
              <div className="cv-document-item">
                <h4>Carnet de Vacunación</h4>
                <img
                  src={data.carnetVacunas}
                  alt="Carnet"
                  className="cv-document-img-modern"
                />
              </div>
            )}
            {data.certificados.map((cert, index) => (
              <div key={index} className="cv-document-item">
                <h4>Certificado {index + 1}</h4>
                <img
                  src={cert}
                  alt={`Certificado ${index + 1}`}
                  className="cv-document-img-modern"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CVTemplateModern;