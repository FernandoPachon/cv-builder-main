import React from "react";

function DocumentUploadSection({ data, setData }) {
  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData({ ...data, [fieldName]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMultipleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const filePromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(filePromises).then((results) => {
      setData({ ...data, certificados: [...data.certificados, ...results] });
    });
  };

  const eliminarCertificado = (index) => {
    const nuevosCertificados = data.certificados.filter((_, i) => i !== index);
    setData({ ...data, certificados: nuevosCertificados });
  };

  return (
    <section className="editor-section">
      <h2>📎 Documentos y Foto</h2>

      {/* Foto Personal */}
      <div className="upload-group">
        <label htmlFor="foto">📷 Foto Personal (3x4)</label>
        <input
          id="foto"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload(e, "foto")}
        />
        {data.foto && (
          <div className="preview-image">
            <img src={data.foto} alt="Foto" />
            <button
              className="remove-file"
              onClick={() => setData({ ...data, foto: null })}
            >
              ✕ Eliminar
            </button>
          </div>
        )}
      </div>

      {/* Cédula Frente */}
      <div className="upload-group">
        <label htmlFor="cedulaFrente">🆔 Cédula (Frente)</label>
        <input
          id="cedulaFrente"
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => handleFileUpload(e, "cedulaFrente")}
        />
        {data.cedulaFrente && (
          <div className="file-uploaded">
            ✅ Archivo cargado
            <button
              className="remove-file"
              onClick={() => setData({ ...data, cedulaFrente: null })}
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Cédula Reverso */}
      <div className="upload-group">
        <label htmlFor="cedulaReverso">🆔 Cédula (Reverso)</label>
        <input
          id="cedulaReverso"
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => handleFileUpload(e, "cedulaReverso")}
        />
        {data.cedulaReverso && (
          <div className="file-uploaded">
            ✅ Archivo cargado
            <button
              className="remove-file"
              onClick={() => setData({ ...data, cedulaReverso: null })}
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Carnet de Vacunas */}
      <div className="upload-group">
        <label htmlFor="carnetVacunas">💉 Carnet de Vacunación</label>
        <input
          id="carnetVacunas"
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => handleFileUpload(e, "carnetVacunas")}
        />
        {data.carnetVacunas && (
          <div className="file-uploaded">
            ✅ Archivo cargado
            <button
              className="remove-file"
              onClick={() => setData({ ...data, carnetVacunas: null })}
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Certificados */}
      <div className="upload-group">
        <label htmlFor="certificados">
          📜 Certificados (puedes subir varios)
        </label>
        <input
          id="certificados"
          type="file"
          accept="image/*,application/pdf"
          multiple
          onChange={handleMultipleFileUpload}
        />
        {data.certificados.length > 0 && (
          <div className="files-list">
            {data.certificados.map((cert, index) => (
              <div key={index} className="file-uploaded">
                ✅ Certificado {index + 1}
                <button
                  className="remove-file"
                  onClick={() => eliminarCertificado(index)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default DocumentUploadSection;