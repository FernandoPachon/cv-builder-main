import React from "react";

function CVTemplateProfessional({ data }) {
  return (
    <>
      <div className="cv-sidebar">
        <div className="cv-profile-photo">👤</div>
        <h1>{data.nombre || "Tu Nombre"}</h1>
        <div className="job-title">Software Engineer</div>

        {/* Contacto en Sidebar */}
        {(data.email || data.telefono || data.ubicacion) && (
          <div className="cv-sidebar-section">
            <h2>Contacto</h2>
            <div className="cv-contact">
              {data.telefono && <span>📞 {data.telefono}</span>}
              {data.email && <span>📧 {data.email}</span>}
              {data.ubicacion && <span>📍 {data.ubicacion}</span>}
            </div>
          </div>
        )}

        {/* Habilidades en Sidebar */}
        {data.habilidades.length > 0 && (
          <div className="cv-sidebar-section">
            <h2>Habilidades</h2>
            <ul className="cv-sidebar-skills">
              {data.habilidades.map((skill, index) => (
                <li key={index}>
                  <div className="cv-skill">
                    <span className="skill-name">{skill.nombre}</span>
                    <span className="skill-level">{skill.nivel}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Idiomas (placeholder) */}
        <div className="cv-sidebar-section">
          <h2>Idiomas</h2>
          <ul className="cv-sidebar-languages">
            <li>
              Español <span>Nativo</span>
            </li>
            <li>
              Inglés <span>Avanzado</span>
            </li>
          </ul>
        </div>

        {/* Hobbies (placeholder) */}
        <div className="cv-sidebar-section">
          <h2>Hobbies</h2>
          <ul className="cv-sidebar-hobbies">
            <li>Programación</li>
            <li>Lectura</li>
            <li>Música</li>
          </ul>
        </div>
      </div>

      <div className="cv-main-content">
        {/* Perfil */}
        {data.perfil && (
          <div className="cv-section">
            <h2>Perfil</h2>
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
      </div>
    </>
  );
}

export default CVTemplateProfessional;