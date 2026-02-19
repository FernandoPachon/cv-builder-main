import React from "react";

function CVTemplateClassic({ data, backgroundImage }) {
  return (
    <div className="hv-clasica-container">
      {/* ============= PÁGINA 1: ENCABEZADO Y FOTO ============= */}
      <div className="hv-clasica-page hv-page-1">
         
        {/* BARRA GRIS SUPERIOR */}
        <div className="hv-top-bar"></div>

        {/* ENCABEZADO "HOJA DE VIDA" */}
        <div className="hv-header-box">
          <h1 className="hv-header-title">Hoja de Vida</h1>
        </div>

        {/* CÍRCULO DECORATIVO IZQUIERDO */}
        <div className="hv-circle-left"></div>

        {/* LÍNEA VERTICAL IZQUIERDA */}
        <div className="hv-line-vertical"></div>

        {/* LÍNEA HORIZONTAL NEGRA */}
        <div className="hv-line-horizontal"></div>

        {/* NOMBRE PRINCIPAL */}
        <div className="hv-name-section">
          <h2 className="hv-name-text">
            {data.nombre && data.apellidos 
              ? `${data.nombre} ${data.apellidos}` 
              : "Tu Nombre"}
          </h2>
        </div>

        {/* CONTENEDOR DE FOTO E INFORMACIÓN */}
        <div className="hv-photo-info-wrapper">
          
          {/* MARCO CON SOMBRA (FONDO) */}
          <div className="hv-shadow-frame"></div>

          {/* FOTO */}
          <div className="hv-photo-box">
            {data.foto ? (
              <img src={data.foto} alt="Foto" className="hv-photo" />
            ) : (
              <div className="hv-photo-placeholder">
                <span></span>
              </div>
            )}
          </div>

          {/* RECUADRO DE INFORMACIÓN */}
          <div className="hv-info-block">
            <p className="hv-info-line">No. Identificación: {data.identificacion || "1.121.939.448"}</p>
            <p className="hv-info-line">Celular. {data.telefono || "3227310717"}</p>
            <p className="hv-info-line">{data.direccion || "Calle 22 # 23 -22"}</p>
            <p className="hv-info-line">{data.ubicacion || "Aguazul - Casanare"}</p>
          </div>
        </div>

        {/* BARRA GRIS INFERIOR */}
        <div className="hv-bottom-bar"></div>

      </div>

      {/* ============= PÁGINA 2: DATOS PERSONALES + INFORMACIÓN ACADÉMICA ============= */}
      <div className="hv-clasica-page hv-page-content">
        
        {/* BARRA GRIS SUPERIOR */}
        <div className="hv-top-bar"></div>

        {/* LÍNEA VERTICAL IZQUIERDA */}
        <div className="hv-line-vertical"></div>

        {/* CONTENIDO */}
        <div className="hv-content-wrapper">

          {/* SECCIÓN: DATOS PERSONALES */}
          <h3 className="hv-section-title">DATOS PERSONALES</h3>

          <div className="hv-section-content">
            <div className="hv-data-row">
              <span className="hv-data-label">NOMBRES:</span>
              <span className="hv-data-value--name">{data.nombre || "YERLI DISENEY"}</span>
            </div>

            <div className="hv-data-row">
              <span className="hv-data-label">APELLIDOS:</span>
              <span className="hv-data-value--name">{data.apellidos || "BONILLA VEGA"}</span>
            </div>

            <div className="hv-data-row">
              <span className="hv-data-label">FECHA DE NACIMIENTO:</span>
              <span className="hv-data-value">{data.fechaNacimiento || "5 de noviembre de 1996"}</span>
            </div>

            <div className="hv-data-row">
              <span className="hv-data-label">LUGAR DE NACIMIENTO:</span>
              <span className="hv-data-value">{data.lugarNacimiento || "Aguazul - Casanare"}</span>
            </div>

            <div className="hv-data-row">
              <span className="hv-data-label">IDENTIFICACIÓN:</span>
              <span className="hv-data-value">C.C. Nº {data.identificacion || "1.121.939448"}</span>
            </div>

            <div className="hv-data-row">
              <span className="hv-data-label">ESTADO CIVIL:</span>
              <span className="hv-data-value">{data.estadoCivil || "Casada"}</span>
            </div>

            <div className="hv-data-row">
              <span className="hv-data-label">RESIDENCIA:</span>
              <span className="hv-data-value">{data.direccion || "Calle 22 # 23 - 22"}</span>
            </div>

            <div className="hv-data-row">
              <span className="hv-data-label">CELULAR:</span>
              <span className="hv-data-value">{data.telefono || "322 731 0717"}</span>
            </div>

            <div className="hv-data-row">
              <span className="hv-data-label">CIUDAD:</span>
              <span className="hv-data-value">{data.ubicacion || "Aguazul - Casanare"}</span>
            </div>
          </div>

          {/* SECCIÓN: INFORMACIÓN ACADÉMICA */}
          <h3 className="hv-section-title">INFORMACIÓN ACADÉMICA</h3>

          <div className="hv-section-content">
            {data.educacion && data.educacion.length > 0 ? (
              data.educacion.map((edu, index) => (
                <div key={index} className="hv-edu-block">
                  <div className="hv-edu-header">
                    <span className="hv-edu-type">{edu.tipo || "ESTUDIOS SECUNDARIOS"}:</span>
                    <span className="hv-edu-institution">{edu.institucion || "INSTITUCIÓN EDUCATIVA"}</span>
                  </div>
                  <div className="hv-edu-details">
                    {edu.grado && <p className="hv-edu-text">{edu.grado}</p>}
                    {edu.titulo && <p className="hv-edu-text">{edu.titulo}</p>}
                    <div className="hv-data-row">
                      <span className="hv-data-label">LUGAR:</span>
                      <span className="hv-data-value">{edu.lugar || "___________"}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="hv-edu-block">
                  <div className="hv-edu-header">
                    <span className="hv-edu-type">ESTUDIOS SECUNDARIOS:</span>
                    <span className="hv-edu-institution">CENTRO DE EDUCACION LABORAL EL CONOCIMIENTO EFICAZ</span>
                  </div>
                  <div className="hv-edu-details">
                    <p className="hv-edu-text">Once (11°) Grado</p>
                    <p className="hv-edu-text">Bachiller académico.</p>
                    <div className="hv-data-row">
                      <span className="hv-data-label">LUGAR:</span>
                      <span className="hv-data-value">Bogotá D.C</span>
                    </div>
                  </div>
                </div>

                <div className="hv-edu-block">
                  <div className="hv-edu-header">
                    <span className="hv-edu-type">COMPLEMENTARIOS:</span>
                    <span className="hv-edu-institution">SERVICIO NACIONAL DE APRENDIZAJE - SENA</span>
                  </div>
                  <div className="hv-edu-details">
                    <p className="hv-edu-text">Curso</p>
                    <p className="hv-edu-text">Administración de recursos humanos</p>
                    <div className="hv-data-row">
                      <span className="hv-data-label">LUGAR:</span>
                      <span className="hv-data-value">Virtual</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* BARRA GRIS INFERIOR */}
        <div className="hv-bottom-bar"></div>

      </div>

      {/* ============= PÁGINA 3: EXPERIENCIA LABORAL + REFERENCIAS PERSONALES ============= */}
      <div className="hv-clasica-page hv-page-content">
        
        {/* BARRA GRIS SUPERIOR */}
        <div className="hv-top-bar"></div>

        {/* LÍNEA VERTICAL IZQUIERDA */}
        <div className="hv-line-vertical"></div>

        {/* CONTENIDO */}
        <div className="hv-content-wrapper">

          {/* SECCIÓN: EXPERIENCIA LABORAL */}
          <h3 className="hv-section-title">EXPERIENCIA LABORAL</h3>

          <div className="hv-section-content">
            {data.experiencia && data.experiencia.length > 0 ? (
              data.experiencia.map((exp, index) => (
                <div key={index} className="hv-exp-block">
                  <div className="hv-data-row">
                    <span className="hv-data-label">EMPRESA:</span>
                    <span className="hv-data-value hv-bold">{exp.empresa || "NOMBRE DE LA EMPRESA"}</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">JEFE INMEDIATO:</span>
                    <span className="hv-data-value">{exp.jefe || "___________"}</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">CARGO:</span>
                    <span className="hv-data-value">{exp.cargo || "___________"}</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">TIEMPO LABORADO:</span>
                    <span className="hv-data-value">{exp.fechaInicio || "___"} – {exp.fechaFin || "Actualmente"}</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">LUGAR:</span>
                    <span className="hv-data-value">{exp.lugar || "___________"}</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">CELULAR:</span>
                    <span className="hv-data-value">{exp.telefono || "___________"}</span>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="hv-exp-block">
                  <div className="hv-data-row">
                    <span className="hv-data-label">EMPRESA:</span>
                    <span className="hv-data-value hv-bold">ASADERO EL</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">JEFE INMEDIATO:</span>
                    <span className="hv-data-value">Cristian salamanca</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">CARGO:</span>
                    <span className="hv-data-value">Auxiliar de cocina</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">TIEMPO LABORADO:</span>
                    <span className="hv-data-value">30 junio de 2025 – Actualmente</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">LUGAR:</span>
                    <span className="hv-data-value">Aguazul – Casanare</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">CELULAR:</span>
                    <span className="hv-data-value">300 448 6282</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* SECCIÓN: REFERENCIAS PERSONALES */}
          <h3 className="hv-section-title">REFERENCIAS PERSONALES</h3>

          <div className="hv-section-content">
            {data.referenciasPersonales && data.referenciasPersonales.length > 0 ? (
              data.referenciasPersonales.map((ref, index) => (
                <div key={index} className="hv-ref-block">
                  <div className="hv-data-row">
                    <span className="hv-data-label">NOMBRE:</span>
                    <span className="hv-data-value hv-bold">{ref.nombre || "NOMBRE COMPLETO"}</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">OCUPACION:</span>
                    <span className="hv-data-value">{ref.ocupacion || "___________"}</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">CELULAR:</span>
                    <span className="hv-data-value">{ref.telefono || "___________"}</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">LUGAR:</span>
                    <span className="hv-data-value">{ref.lugar || "___________"}</span>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="hv-ref-block">
                  <div className="hv-data-row">
                    <span className="hv-data-label">NOMBRE:</span>
                    <span className="hv-data-value hv-bold">FERNANDO PACHON MORENO</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">OCUPACION:</span>
                    <span className="hv-data-value">Empleado</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">CELULAR:</span>
                    <span className="hv-data-value">320 404 9949</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">LUGAR:</span>
                    <span className="hv-data-value">Aguazul - Casanare</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* BARRA GRIS INFERIOR */}
        <div className="hv-bottom-bar"></div>

      </div>

      {/* ============= PÁGINA 4: REFERENCIAS FAMILIARES + FIRMA ============= */}
      <div className="hv-clasica-page hv-page-content">
        
        {/* BARRA GRIS SUPERIOR */}
        <div className="hv-top-bar"></div>

        {/* LÍNEA VERTICAL IZQUIERDA */}
        <div className="hv-line-vertical"></div>

        {/* CONTENIDO */}
        <div className="hv-content-wrapper">

          {/* SECCIÓN: REFERENCIAS FAMILIARES */}
          <h3 className="hv-section-title">REFERENCIAS FAMILIARES</h3>

          <div className="hv-section-content">
            {data.referenciasFamiliares && data.referenciasFamiliares.length > 0 ? (
              data.referenciasFamiliares.map((ref, index) => (
                <div key={index} className="hv-ref-block">
                  <div className="hv-data-row">
                    <span className="hv-data-label">NOMBRE:</span>
                    <span className="hv-data-value hv-bold">{ref.nombre || "NOMBRE COMPLETO"}</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">OCUPACIÓN:</span>
                    <span className="hv-data-value">{ref.ocupacion || "___________"}</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">CELULAR:</span>
                    <span className="hv-data-value">{ref.telefono || "___________"}</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">LUGAR:</span>
                    <span className="hv-data-value">{ref.lugar || "___________"}</span>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="hv-ref-block">
                  <div className="hv-data-row">
                    <span className="hv-data-label">NOMBRE:</span>
                    <span className="hv-data-value hv-bold">LILIA MARIBEL BONILLA VEGA</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">OCUPACIÓN:</span>
                    <span className="hv-data-value">Oficios varios</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">CELULAR:</span>
                    <span className="hv-data-value">310 878 3188</span>
                  </div>
                  <div className="hv-data-row">
                    <span className="hv-data-label">LUGAR:</span>
                    <span className="hv-data-value">Aguazul - Casanare</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* FIRMA */}
          <div className="hv-signature-block">
            <div className="hv-signature-line">_______________________________________</div>
            <div className="hv-signature-name">
              {data.nombre && data.apellidos 
                ? `${data.nombre} ${data.apellidos}`.toUpperCase() 
                : "YERLI BONILLA VEGA"}
            </div>
            <div className="hv-signature-id">
              C.C. Nº {data.identificacion || "1.1169.542.173"} de {data.lugarExpedicion || "Villavicencio"}
            </div>
          </div>
        </div>

        {/* BARRA GRIS INFERIOR */}
        <div className="hv-bottom-bar"></div>

      </div>

      {/* ============= PÁGINAS DE DOCUMENTOS ANEXOS ============= */}
      {data.documentosAnexos && data.documentosAnexos.length > 0 && (
        <>
          {data.documentosAnexos.map((doc) => {
            if (doc.tipo === "doble") {
              return (
                <div key={doc.id} className="hv-clasica-page hv-page-content">
                  <div className="hv-top-bar"></div>
                  <div className="hv-line-vertical"></div>
                  
                  <div className="hv-content-wrapper">
                    <div className="hv-anexo-title">
                      <h2>{doc.nombre.toUpperCase()}</h2>
                    </div>

                    <div className="hv-documents-vertical">
                      <div className="hv-doc-item">
                        <p className="hv-doc-label">FRENTE</p>
                        <div className="hv-doc-container">
                          {doc.frente ? (
                            <img src={doc.frente} alt={`${doc.nombre} Frente`} className="hv-doc-image" />
                          ) : (
                            <div className="hv-doc-placeholder">
                              <p>📄 {doc.nombre.toUpperCase()}</p>
                              <p className="small">Frente</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="hv-doc-item">
                        <p className="hv-doc-label">REVERSO</p>
                        <div className="hv-doc-container">
                          {doc.reverso ? (
                            <img src={doc.reverso} alt={`${doc.nombre} Reverso`} className="hv-doc-image" />
                          ) : (
                            <div className="hv-doc-placeholder">
                              <p>📄 {doc.nombre.toUpperCase()}</p>
                              <p className="small">Reverso</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hv-bottom-bar"></div>
                </div>
              );
            } else {
              return (
                <div key={doc.id} className="hv-clasica-page hv-page-content">
                  <div className="hv-top-bar"></div>
                  <div className="hv-line-vertical"></div>
                  
                  <div className="hv-content-wrapper">
                    <div className="hv-anexo-title">
                      <h2>{doc.nombre.toUpperCase()}</h2>
                    </div>

                    <div className="hv-doc-full">
                      {doc.imagen ? (
                        <img src={doc.imagen} alt={doc.nombre} className="hv-doc-image-full" />
                      ) : (
                        <div className="hv-doc-placeholder-full">
                          <p>📄 {doc.nombre.toUpperCase()}</p>
                          <p className="small">Página Completa</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hv-bottom-bar"></div>
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
}

export default CVTemplateClassic;