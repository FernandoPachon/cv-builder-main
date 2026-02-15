import React from "react";

function CVTemplateClassic({ data }) {
  return (
    <div className="hoja-vida-colombiana">
      {/* PÁGINA 1 - HOJA DE VIDA */}
      <div className="hv-page hv-page-1">
        {/* Bordes laterales decorativos */}
        <div className="hv-page-borders">
          <div className="hv-border-left"></div>
          <div className="hv-border-right"></div>
        </div>

        <div className="hv-page-content">
          {/* Header superior gris */}
          <div className="hv-top-bar"></div>

          {/* Header "Hoja de Vida" */}
          <div className="hv-header-new">
            <h1>Hoja de Vida</h1>
          </div>

          {/* Banner con nombre */}
          <div className="hv-name-banner-new">
            <h2>
              {data.nombre && data.apellidos
                ? `${data.nombre} ${data.apellidos}`
                : "Nombre Completo"}
            </h2>
          </div>

          {/* Contenedor principal con foto y datos */}
          <div className="hv-main-container">
            {/* Foto a la izquierda */}
            <div className="hv-photo-container-new">
              <div className="hv-photo-frame">
                {data.foto ? (
                  <img
                    src={data.foto}
                    alt="Foto"
                    className="hv-photo-img-new"
                  />
                ) : (
                  <div className="hv-photo-placeholder-new">
                    <span>📷</span>
                    <p>Foto 3x4</p>
                  </div>
                )}
              </div>
            </div>

            {/* Cuadro de información a la derecha */}
            <div className="hv-info-box-new">
              <div className="hv-info-row">
                <span className="hv-info-label">CC:</span>
                <span className="hv-info-value">
                  {data.cedula || "1.234.567.890"}
                </span>
              </div>
              <div className="hv-info-row">
                <span className="hv-info-label">Teléfono:</span>
                <span className="hv-info-value">
                  {data.telefono || "321 123 4567"}
                </span>
              </div>
              <div className="hv-info-row">
                <span className="hv-info-label">Email:</span>
                <span className="hv-info-value">
                  {data.email || "correo@ejemplo.com"}
                </span>
              </div>
            </div>
          </div>

          {/* Barra inferior gris */}
          <div className="hv-bottom-bar"></div>
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

      {/* PÁGINAS 5+ - DOCUMENTOS ANEXOS DINÁMICOS */}
      {data.documentosAnexos && data.documentosAnexos.length > 0 && (
        <>
          {data.documentosAnexos.map((doc) => {
            if (doc.tipo === "doble") {
              // Documento de 2 caras - mostrar apilados verticalmente
              return (
                <div key={doc.id} className="hv-page hv-page-anexo">
                  <div className="hv-section-title">
                    <h3>{doc.nombre.toUpperCase()}</h3>
                  </div>

                  <div className="hv-documents-grid">
                    {/* Frente */}
                    <div className="hv-document-card">
                      <p className="doc-label">FRENTE</p>
                      <div className="hv-document-placeholder">
                        {doc.frente ? (
                          <img
                            src={doc.frente}
                            alt={`${doc.nombre} Frente`}
                            className="hv-document-img"
                          />
                        ) : (
                          <>
                            <p>📄 {doc.nombre.toUpperCase()}</p>
                            <p className="small">Frente</p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Reverso */}
                    <div className="hv-document-card">
                      <p className="doc-label">REVERSO</p>
                      <div className="hv-document-placeholder">
                        {doc.reverso ? (
                          <img
                            src={doc.reverso}
                            alt={`${doc.nombre} Reverso`}
                            className="hv-document-img"
                          />
                        ) : (
                          <>
                            <p>📄 {doc.nombre.toUpperCase()}</p>
                            <p className="small">Reverso</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              // Documento de 1 cara - página completa
              return (
                <div key={doc.id} className="hv-page hv-page-anexo-full">
                  <div className="hv-section-title-simple">
                    <h3>{doc.nombre.toUpperCase()}</h3>
                  </div>

                  <div className="hv-document-full-container">
                    {doc.imagen ? (
                      <img
                        src={doc.imagen}
                        alt={doc.nombre}
                        className="hv-document-img-full"
                      />
                    ) : (
                      <div className="hv-document-placeholder-full">
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
    </div>
  );
}

export default CVTemplateClassic;