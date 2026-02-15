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

      {/* PÁGINAS DE DOCUMENTOS ANEXOS - Igual que en clásico */}
      {data.documentosAnexos && data.documentosAnexos.length > 0 && (
        <>
          {data.documentosAnexos.map((doc) => {
            if (doc.tipo === "doble") {
              // Documento de 2 caras - página separada
              return (
                <div key={doc.id} className="modern-anexo-page">
                  <div className="modern-anexo-header">
                    <h2>{doc.nombre.toUpperCase()}</h2>
                  </div>

                  <div className="modern-documents-stack">
                    {/* Frente */}
                    <div className="modern-document-item">
                      <p className="modern-doc-label">FRENTE</p>
                      <div className="modern-document-container">
                        {doc.frente ? (
                          <img
                            src={doc.frente}
                            alt={`${doc.nombre} Frente`}
                            className="modern-document-img"
                          />
                        ) : (
                          <div className="modern-placeholder">
                            <p>📄 {doc.nombre.toUpperCase()}</p>
                            <p className="small">Frente</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Reverso */}
                    <div className="modern-document-item">
                      <p className="modern-doc-label">REVERSO</p>
                      <div className="modern-document-container">
                        {doc.reverso ? (
                          <img
                            src={doc.reverso}
                            alt={`${doc.nombre} Reverso`}
                            className="modern-document-img"
                          />
                        ) : (
                          <div className="modern-placeholder">
                            <p>📄 {doc.nombre.toUpperCase()}</p>
                            <p className="small">Reverso</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              // Documento de 1 cara - página completa
              return (
                <div key={doc.id} className="modern-anexo-page-full">
                  <div className="modern-anexo-header">
                    <h2>{doc.nombre.toUpperCase()}</h2>
                  </div>

                  <div className="modern-document-full">
                    {doc.imagen ? (
                      <img
                        src={doc.imagen}
                        alt={doc.nombre}
                        className="modern-document-img-full"
                      />
                    ) : (
                      <div className="modern-placeholder-full">
                        <p>📄 {doc.nombre.toUpperCase()}</p>
                        <p className="small">Página Completa</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            }
          })}
        </>
      )}
    </>
  );
}

export default CVTemplateModern;