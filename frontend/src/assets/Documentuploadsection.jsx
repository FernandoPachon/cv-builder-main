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

  // Agregar documento de doble cara (como cédula)
  const agregarDocumentoDoble = () => {
    const nuevoDoc = {
      id: Date.now(),
      tipo: "doble",
      nombre: "Documento",
      frente: null,
      reverso: null,
    };
    setData({
      ...data,
      documentosAnexos: [...(data.documentosAnexos || []), nuevoDoc],
    });
  };

  // Agregar documento de una sola cara (página completa)
  const agregarDocumentoSimple = () => {
    const nuevoDoc = {
      id: Date.now(),
      tipo: "simple",
      nombre: "Certificado",
      imagen: null,
    };
    setData({
      ...data,
      documentosAnexos: [...(data.documentosAnexos || []), nuevoDoc],
    });
  };

  // Actualizar documento
  const actualizarDocumento = (id, campo, valor) => {
    const nuevosDocumentos = data.documentosAnexos.map((doc) =>
      doc.id === id ? { ...doc, [campo]: valor } : doc
    );
    setData({ ...data, documentosAnexos: nuevosDocumentos });
  };

  // Convertir PDF a imagen usando PDF.js
  const convertPdfToImage = async (pdfData) => {
    try {
      // Cargar PDF.js si no está disponible
      if (!window.pdfjsLib) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
        document.head.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = resolve;
        });
        
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      }

      const loadingTask = window.pdfjsLib.getDocument(pdfData);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const scale = 2;
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport
      }).promise;
      
      return canvas.toDataURL('image/jpeg', 0.95);
    } catch (error) {
      console.error('Error convirtiendo PDF:', error);
      return null;
    }
  };

  // Subir archivo para documento (con conversión de PDF a imagen)
  const subirArchivoDocumento = async (id, campo, file) => {
    if (file) {
      const fileType = file.type;

      if (fileType === "application/pdf") {
        // Convertir PDF a imagen
        const reader = new FileReader();
        reader.onloadend = async () => {
          const pdfData = reader.result;
          const imageData = await convertPdfToImage(pdfData);
          
          if (imageData) {
            actualizarDocumento(id, campo, imageData);
          } else {
            alert('Error al procesar el PDF. Por favor, intenta con una imagen JPG o PNG.');
          }
        };
        reader.readAsDataURL(file);
      } else if (fileType.startsWith("image/")) {
        // Procesar imágenes normalmente
        const reader = new FileReader();
        reader.onloadend = () => {
          actualizarDocumento(id, campo, reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Solo se permiten archivos PDF o imágenes (JPG, PNG, etc.)");
      }
    }
  };

  // Eliminar documento
  const eliminarDocumento = (id) => {
    const nuevosDocumentos = data.documentosAnexos.filter(
      (doc) => doc.id !== id
    );
    setData({ ...data, documentosAnexos: nuevosDocumentos });
  };

  // Mover documento arriba
  const moverArriba = (index) => {
    if (index === 0) return;
    const nuevosDocumentos = [...data.documentosAnexos];
    [nuevosDocumentos[index - 1], nuevosDocumentos[index]] = [
      nuevosDocumentos[index],
      nuevosDocumentos[index - 1],
    ];
    setData({ ...data, documentosAnexos: nuevosDocumentos });
  };

  // Mover documento abajo
  const moverAbajo = (index) => {
    if (index === data.documentosAnexos.length - 1) return;
    const nuevosDocumentos = [...data.documentosAnexos];
    [nuevosDocumentos[index], nuevosDocumentos[index + 1]] = [
      nuevosDocumentos[index + 1],
      nuevosDocumentos[index],
    ];
    setData({ ...data, documentosAnexos: nuevosDocumentos });
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

      {/* Documentos Anexos */}
      <div className="documentos-anexos-section">
        <h3>📄 Documentos Anexos</h3>
        <p className="docs-hint">
          Agrega cédulas, certificados, carnets y otros documentos
        </p>

        <div className="add-document-buttons">
          <button className="btn-add-doc" onClick={agregarDocumentoDoble}>
            ➕ Documento de 2 Caras
          </button>
          <button className="btn-add-doc" onClick={agregarDocumentoSimple}>
            ➕ Documento de 1 Cara
          </button>
        </div>

        {/* Lista de documentos */}
        {data.documentosAnexos && data.documentosAnexos.length > 0 && (
          <div className="documentos-lista">
            {data.documentosAnexos.map((doc, index) => (
              <div key={doc.id} className="documento-card">
                <div className="documento-header">
                  <input
                    type="text"
                    value={doc.nombre}
                    onChange={(e) =>
                      actualizarDocumento(doc.id, "nombre", e.target.value)
                    }
                    placeholder="Nombre del documento"
                    className="documento-nombre-input"
                  />
                  <span className="documento-tipo-badge">
                    {doc.tipo === "doble" ? "2 Caras" : "1 Cara"}
                  </span>
                  <div className="documento-controls">
                    <button
                      className="btn-move"
                      onClick={() => moverArriba(index)}
                      disabled={index === 0}
                      title="Mover arriba"
                    >
                      ↑
                    </button>
                    <button
                      className="btn-move"
                      onClick={() => moverAbajo(index)}
                      disabled={index === data.documentosAnexos.length - 1}
                      title="Mover abajo"
                    >
                      ↓
                    </button>
                    <button
                      className="delete-btn-small"
                      onClick={() => eliminarDocumento(doc.id)}
                      title="Eliminar"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {doc.tipo === "doble" ? (
                  // Documento de 2 caras
                  <div className="documento-doble-upload">
                    <div className="upload-cara">
                      <label>Frente:</label>
                      <input
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={(e) =>
                          subirArchivoDocumento(
                            doc.id,
                            "frente",
                            e.target.files[0]
                          )
                        }
                      />
                      {doc.frente && (
                        <div className="mini-preview">
                          <img src={doc.frente} alt="Frente" />
                        </div>
                      )}
                    </div>
                    <div className="upload-cara">
                      <label>Reverso:</label>
                      <input
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={(e) =>
                          subirArchivoDocumento(
                            doc.id,
                            "reverso",
                            e.target.files[0]
                          )
                        }
                      />
                      {doc.reverso && (
                        <div className="mini-preview">
                          <img src={doc.reverso} alt="Reverso" />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // Documento de 1 cara (página completa)
                  <div className="documento-simple-upload">
                    <label>Subir imagen/PDF:</label>
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={(e) =>
                        subirArchivoDocumento(
                          doc.id,
                          "imagen",
                          e.target.files[0]
                        )
                      }
                    />
                    {doc.imagen && (
                      <div className="full-preview">
                        <img src={doc.imagen} alt={doc.nombre} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default DocumentUploadSection;