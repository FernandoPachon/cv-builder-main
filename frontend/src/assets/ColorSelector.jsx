import React from "react";

function ColorSelector({ data, setData, style }) {
  // Solo mostrar selector de colores para template profesional
  if (style !== "profesional") {
    return null;
  }

  const colorSchemes = {
    hombres: [
      { name: "Azul Profesional", primary: "#2c3e50", secondary: "#3498db", accent: "#2980b9" },
      { name: "Gris Corporativo", primary: "#34495e", secondary: "#7f8c8d", accent: "#95a5a6" },
      { name: "Verde Esmeralda", primary: "#16a085", secondary: "#1abc9c", accent: "#48c9b0" },
      { name: "Azul Marino", primary: "#1e3a5f", secondary: "#2e5984", accent: "#4a7ba7" },
      { name: "Negro Elegante", primary: "#212121", secondary: "#424242", accent: "#616161" },
    ],
    mujeres: [
      { name: "Rosa Suave", primary: "#8e44ad", secondary: "#c39bd3", accent: "#d7bde2" },
      { name: "Lavanda", primary: "#5d4e6d", secondary: "#9b89b3", accent: "#c8b8db" },
      { name: "Coral", primary: "#e74c3c", secondary: "#ec7063", accent: "#f1948a" },
      { name: "Turquesa", primary: "#16697a", secondary: "#489fb5", accent: "#82c0cc" },
      { name: "Morado Real", primary: "#6c5ce7", secondary: "#a29bfe", accent: "#dfe6e9" },
    ],
  };

  const handleColorChange = (scheme) => {
    setData({
      ...data,
      colorScheme: scheme,
    });
  };

  const handleColorBoxClick = (e, scheme, colorType) => {
    e.stopPropagation(); // Evitar que se seleccione toda la paleta
    
    // Crear input de color temporal
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = scheme[colorType];
    
    colorInput.addEventListener('change', (event) => {
      const newColor = event.target.value;
      setData({
        ...data,
        colorScheme: {
          ...scheme,
          [colorType]: newColor,
          name: scheme.name + " (Modificado)",
        },
      });
    });
    
    colorInput.click();
  };

  const handleIndividualColorChange = (colorType, value) => {
    setData({
      ...data,
      colorScheme: {
        ...data.colorScheme,
        name: data.colorScheme?.name?.includes("Modificado") 
          ? data.colorScheme.name 
          : "Personalizado",
        [colorType]: value,
      },
    });
  };

  return (
    <section className="editor-section">
      <h2>🎨 Colores del CV (Solo Template Profesional)</h2>

      <div className="color-category">
        <h3>👔 Paletas para Hombres</h3>
        <p className="color-hint">Haz clic en cada cuadro de color para cambiarlo individualmente</p>
        <div className="color-schemes-grid">
          {colorSchemes.hombres.map((scheme, index) => (
            <div
              key={index}
              className={`color-scheme-card ${
                data.colorScheme?.name === scheme.name || 
                data.colorScheme?.name === scheme.name + " (Modificado)" 
                  ? "selected" 
                  : ""
              }`}
              onClick={() => handleColorChange(scheme)}
            >
              <div className="color-preview">
                <div
                  className="color-box clickable"
                  style={{ backgroundColor: scheme.primary }}
                  onClick={(e) => handleColorBoxClick(e, scheme, 'primary')}
                  title="Click para cambiar color principal"
                ></div>
                <div
                  className="color-box clickable"
                  style={{ backgroundColor: scheme.secondary }}
                  onClick={(e) => handleColorBoxClick(e, scheme, 'secondary')}
                  title="Click para cambiar color secundario"
                ></div>
                <div
                  className="color-box clickable"
                  style={{ backgroundColor: scheme.accent }}
                  onClick={(e) => handleColorBoxClick(e, scheme, 'accent')}
                  title="Click para cambiar color de acento"
                ></div>
              </div>
              <p className="color-name">{scheme.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="color-category">
        <h3>👗 Paletas para Mujeres</h3>
        <p className="color-hint">Haz clic en cada cuadro de color para cambiarlo individualmente</p>
        <div className="color-schemes-grid">
          {colorSchemes.mujeres.map((scheme, index) => (
            <div
              key={index}
              className={`color-scheme-card ${
                data.colorScheme?.name === scheme.name || 
                data.colorScheme?.name === scheme.name + " (Modificado)" 
                  ? "selected" 
                  : ""
              }`}
              onClick={() => handleColorChange(scheme)}
            >
              <div className="color-preview">
                <div
                  className="color-box clickable"
                  style={{ backgroundColor: scheme.primary }}
                  onClick={(e) => handleColorBoxClick(e, scheme, 'primary')}
                  title="Click para cambiar color principal"
                ></div>
                <div
                  className="color-box clickable"
                  style={{ backgroundColor: scheme.secondary }}
                  onClick={(e) => handleColorBoxClick(e, scheme, 'secondary')}
                  title="Click para cambiar color secundario"
                ></div>
                <div
                  className="color-box clickable"
                  style={{ backgroundColor: scheme.accent }}
                  onClick={(e) => handleColorBoxClick(e, scheme, 'accent')}
                  title="Click para cambiar color de acento"
                ></div>
              </div>
              <p className="color-name">{scheme.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Selector de colores individuales */}
      <div className="color-category">
        <h3>🎨 Ajuste Fino de Colores</h3>
        <div className="color-pickers">
          <div className="color-picker-item">
            <label>Color Principal (Sidebar):</label>
            <div className="color-input-group">
              <input
                type="color"
                value={data.colorScheme?.primary || "#2c3e50"}
                onChange={(e) =>
                  handleIndividualColorChange("primary", e.target.value)
                }
              />
              <input
                type="text"
                value={data.colorScheme?.primary || "#2c3e50"}
                onChange={(e) =>
                  handleIndividualColorChange("primary", e.target.value)
                }
                placeholder="#2c3e50"
                className="hex-input"
              />
            </div>
          </div>

          <div className="color-picker-item">
            <label>Color Secundario (Acentos):</label>
            <div className="color-input-group">
              <input
                type="color"
                value={data.colorScheme?.secondary || "#3498db"}
                onChange={(e) =>
                  handleIndividualColorChange("secondary", e.target.value)
                }
              />
              <input
                type="text"
                value={data.colorScheme?.secondary || "#3498db"}
                onChange={(e) =>
                  handleIndividualColorChange("secondary", e.target.value)
                }
                placeholder="#3498db"
                className="hex-input"
              />
            </div>
          </div>

          <div className="color-picker-item">
            <label>Color de Acento (Detalles):</label>
            <div className="color-input-group">
              <input
                type="color"
                value={data.colorScheme?.accent || "#2980b9"}
                onChange={(e) =>
                  handleIndividualColorChange("accent", e.target.value)
                }
              />
              <input
                type="text"
                value={data.colorScheme?.accent || "#2980b9"}
                onChange={(e) =>
                  handleIndividualColorChange("accent", e.target.value)
                }
                placeholder="#2980b9"
                className="hex-input"
              />
            </div>
          </div>
        </div>
      </div>

      {data.colorScheme && (
        <div className="selected-colors-info">
          <p>
            <strong>Esquema actual:</strong> {data.colorScheme.name}
          </p>
          <div className="color-preview-inline">
            <span
              className="color-dot"
              style={{ backgroundColor: data.colorScheme.primary }}
              title={data.colorScheme.primary}
            ></span>
            <span
              className="color-dot"
              style={{ backgroundColor: data.colorScheme.secondary }}
              title={data.colorScheme.secondary}
            ></span>
            <span
              className="color-dot"
              style={{ backgroundColor: data.colorScheme.accent }}
              title={data.colorScheme.accent}
            ></span>
          </div>
        </div>
      )}
    </section>
  );
}

export default ColorSelector;