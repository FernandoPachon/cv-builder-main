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
          <p className="website-pro">www.unsitioestupendo.com.co</p>
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

        {/* Anexos / Documentos */}
        {(data.cedulaFrente ||
          data.cedulaReverso ||
          data.carnetVacunas ||
          data.certificados.length > 0) && (
          <div className="cv-section-pro">
            <h2 className="section-title-pro">ANEXOS Y DOCUMENTOS</h2>
            <div className="cv-documents-grid-pro">
              {data.cedulaFrente && (
                <div className="cv-document-item-pro">
                  <h4>Cédula (Frente)</h4>
                  <img
                    src={data.cedulaFrente}
                    alt="Cédula Frente"
                    className="cv-document-img-pro"
                  />
                </div>
              )}
              {data.cedulaReverso && (
                <div className="cv-document-item-pro">
                  <h4>Cédula (Reverso)</h4>
                  <img
                    src={data.cedulaReverso}
                    alt="Cédula Reverso"
                    className="cv-document-img-pro"
                  />
                </div>
              )}
              {data.carnetVacunas && (
                <div className="cv-document-item-pro">
                  <h4>Carnet de Vacunación</h4>
                  <img
                    src={data.carnetVacunas}
                    alt="Carnet"
                    className="cv-document-img-pro"
                  />
                </div>
              )}
              {data.certificados.map((cert, index) => (
                <div key={index} className="cv-document-item-pro">
                  <h4>Certificado {index + 1}</h4>
                  <img
                    src={cert}
                    alt={`Certificado ${index + 1}`}
                    className="cv-document-img-pro"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CVTemplateProfessional;