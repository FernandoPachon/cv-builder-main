import React from "react";

function CVTemplateProfessional({ data }) {
  const colorStyles = data.colorScheme
    ? {
        "--color-primary": data.colorScheme.primary,
        "--color-secondary": data.colorScheme.secondary,
        "--color-accent": data.colorScheme.accent,
      }
    : {};

  return (
    <>
      {/* PÁGINA PRINCIPAL: sidebar + contenido dentro del grid */}
      <div className="pro-cv-page" style={colorStyles}>
      <div className="cv-sidebar" style={colorStyles}>
        {/* Foto circular grande */}
        <div className="cv-profile-photo-pro">
          {data.foto ? (
            <img src={data.foto} alt="Foto Perfil" className="cv-photo-img" />
          ) : (
            <div className="photo-placeholder-pro">👤</div>
          )}
        </div>

        {/* Sección de Contacto */}
        <div className="cv-sidebar-section-pro">
          <h2 className="sidebar-title-pro">CONTACTO</h2>
          <div className="sidebar-divider-pro"></div>
          
          <div className="contact-item-pro">
            <span className="icon-pro">📞</span>
            <span>{data.telefono || "(123) 456-7890"}</span>
          </div>
          
          <div className="contact-item-pro">
            <span className="icon-pro">✉️</span>
            <span>{data.email || "email@ejemplo.com"}</span>
          </div>
          
          <div className="contact-item-pro">
            <span className="icon-pro">👤</span>
            <span>Identificación: {data.cedula || "123456"}</span>
          </div>
          
          <div className="contact-item-pro">
            <span className="icon-pro">📍</span>
            <span>{data.ubicacion || "Calle 123, Ciudad"}</span>
          </div>
        </div>

        {/* Referencias */}
        <div className="cv-sidebar-section-pro">
          <h2 className="sidebar-title-pro">REFERENCIAS</h2>
          <div className="sidebar-divider-pro"></div>
          
          <div className="reference-item-pro">
            <div className="ref-icon-pro">👤</div>
            <div>
              <p className="ref-name-pro">Francisco Mercado</p>
              <p className="ref-detail-pro">Ensigna</p>
              <p className="ref-detail-pro">(316) 212-3456</p>
            </div>
          </div>

          <div className="reference-item-pro">
            <div className="ref-icon-pro">👤</div>
            <div>
              <p className="ref-name-pro">Pedro Fernández</p>
              <p className="ref-detail-pro">Borcelle</p>
              <p className="ref-detail-pro">(316) 212-3456</p>
            </div>
          </div>
        </div>

        {/* Sitio Web */}
        <div className="cv-sidebar-section-pro">
          <h2 className="sidebar-title-pro">SITIO WEB</h2>
          <div className="sidebar-divider-pro"></div>
          <p className="website-pro">www.ofipapeleria.com.co</p>
        </div>
      </div>

      <div className="cv-main-content-pro" style={colorStyles}>
        {/* Header con nombre */}
        <div className="cv-header-pro">
          <h1 className="cv-name-pro">
            {data.nombre?.toUpperCase() || "NOMBRE"}<br />
            {data.apellidos?.toUpperCase() || "APELLIDOS"}
          </h1>
          <p className="cv-title-pro">
            {data.perfil ? data.perfil.split('\n')[0] : "ADMINISTRADOR DE EMPRESAS"}
          </p>
          <div className="header-line-pro"></div>
        </div>

        {/* Sobre Mí / Perfil */}
        {data.perfil && (
          <div className="cv-section-pro">
            <h2 className="section-title-pro">SOBRE MÍ</h2>
            <p className="section-text-pro">{data.perfil}</p>
          </div>
        )}

        {/* Experiencia */}
        {data.experiencia.length > 0 && (
          <div className="cv-section-pro">
            <h2 className="section-title-pro">EXPERIENCIA</h2>
            {data.experiencia.map((exp, index) => (
              <div key={index} className="exp-item-pro">
                <h3 className="exp-year-pro">{exp.fechaInicio || "2030"}</h3>
                <h4 className="exp-position-pro">{exp.puesto}</h4>
                <p className="section-text-pro">{exp.descripcion}</p>
              </div>
            ))}
          </div>
        )}

        {/* Educación */}
        {data.educacion.length > 0 && (
          <div className="cv-section-pro">
            <h2 className="section-title-pro">EDUCACIÓN</h2>
            {data.educacion.map((edu, index) => (
              <div key={index} className="edu-item-pro">
                <h3 className="edu-year-pro">{edu.fechaInicio || "2030"}</h3>
                <h4 className="edu-title-pro">{edu.titulo}</h4>
                <p className="edu-institution-pro">{edu.institucion}</p>
              </div>
            ))}
          </div>
        )}

        {/* Habilidades */}
        {data.habilidades.length > 0 && (
          <div className="cv-section-pro">
            <h2 className="section-title-pro">HABILIDADES</h2>
            <div className="skills-grid-pro">
              {data.habilidades.map((skill, index) => (
                <div key={index} className="skill-item-pro">
                  {skill.nombre}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Idiomas */}
        <div className="cv-section-pro">
          <h2 className="section-title-pro">IDIOMAS</h2>
          <div className="languages-grid-pro">
            <span className="language-item-pro">Español</span>
            <span className="language-item-pro">Inglés</span>
          </div>
        </div>
      </div>

      </div>{/* fin pro-cv-page */}

      {/* PÁGINAS DE DOCUMENTOS ANEXOS - fuera del grid */}
      {data.documentosAnexos && data.documentosAnexos.length > 0 && (
        <>
          {data.documentosAnexos.map((doc) => {
            if (doc.tipo === "doble") {
              // Documento de 2 caras - página separada
              return (
                <div key={doc.id} className="profesional-anexo-page" style={colorStyles}>
                  <div className="profesional-anexo-header">
                    <h2>{doc.nombre.toUpperCase()}</h2>
                  </div>

                  <div className="profesional-documents-stack">
                    {/* Frente */}
                    <div className="profesional-document-item">
                      <p className="profesional-doc-label">FRENTE</p>
                      <div className="profesional-document-container">
                        {doc.frente ? (
                          <img
                            src={doc.frente}
                            alt={`${doc.nombre} Frente`}
                            className="profesional-document-img"
                          />
                        ) : (
                          <div className="profesional-placeholder">
                            <p>📄 {doc.nombre.toUpperCase()}</p>
                            <p className="small">Frente</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Reverso */}
                    <div className="profesional-document-item">
                      <p className="profesional-doc-label">REVERSO</p>
                      <div className="profesional-document-container">
                        {doc.reverso ? (
                          <img
                            src={doc.reverso}
                            alt={`${doc.nombre} Reverso`}
                            className="profesional-document-img"
                          />
                        ) : (
                          <div className="profesional-placeholder">
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
                <div key={doc.id} className="profesional-anexo-page-full" style={colorStyles}>
                  <div className="profesional-anexo-header">
                    <h2>{doc.nombre.toUpperCase()}</h2>
                  </div>

                  <div className="profesional-document-full">
                    {doc.imagen ? (
                      <img
                        src={doc.imagen}
                        alt={doc.nombre}
                        className="profesional-document-img-full"
                      />
                    ) : (
                      <div className="profesional-placeholder-full">
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

export default CVTemplateProfessional;