import React from "react";

function CVTemplateModern({ data }) {
  return (
    <>
      {/* Header */}
      <div className="cv-header">
        <h1>{data.nombre || "Tu Nombre"}</h1>
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
    </>
  );
}

export default CVTemplateModern;