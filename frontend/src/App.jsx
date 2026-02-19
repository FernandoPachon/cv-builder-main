import { useState, useRef } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";
import "./App.css";

// Importar componentes
import PersonalInfoForm from "./assets/Personalinfoform";
import ExperienceSection from "./assets/ExperienceSection";
import EducationSection from "./assets/EducantionSection";
import SkillsSection from "./assets/Skillsection";
import DocumentUploadSection from "./assets/Documentuploadsection";
import CVTemplateClassic from "./assets/CvTemplateClassic";
import CVTemplateProfessional from "./assets/CvTemplateProfessional";
import CVTemplateModern from "./assets/CvTemplateModern";
import ColorSelector from "./assets/ColorSelector";
// Importar imagen de fondo para página 1 del clásico
let HvPortalBg;
try {
  HvPortalBg = require('./assets/HvPortal.jpeg');
} catch (e) {
  // Si la imagen no se encuentra, el CSS usará la ruta por defecto
  console.log('Imagen HvPortal.jpeg no encontrada, usando ruta CSS');
}

function App() {
  const [data, setData] = useState({
    nombre: "",
    apellidos: "",
    cedula: "",
    lugarNacimiento:"",
    fechaNacimiento: "",
    estadoCivil: "Soltero",
    email: "",
    telefono: "",
    ubicacion: "",
    ciudad: "",
    perfil: "",
    experiencia: [],
    educacion: [],
    habilidades: [],
    // Archivos
    foto: null,
    documentosAnexos: [], // Array de documentos (simple o doble cara)
    // Colores
    colorScheme: {
      name: "Azul Profesional",
      primary: "#2c3e50",
      secondary: "#3498db",
      accent: "#2980b9",
    },
  });

  const [style, setStyle] = useState("clasico");
  const cvRef = useRef();

  const guardar = async () => {
    try {
      await axios.post("http://localhost:3001/resume", {
        documento: data.cedula,
        data,
        style,
      });
      alert("✅ CV guardado exitosamente");
    } catch (error) {
      alert("❌ Error al guardar: " + error.message);
    }
  };

const descargarPDF = () => {
  const opciones = {
    margin: 0,
    filename: `CV_${data.nombre}_${data.apellidos}.pdf`,
    image: { type: "jpeg", quality: 1.0 },
    html2canvas: {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      scrollY: 0,
      scrollX: 0,
      logging: false,
    },
    jsPDF: {
      unit: "px",
      format: [612, 792],
      orientation: "portrait",
      hotfixes: ["px_scaling"],
    },
    pagebreak: {
      mode: ["css", "legacy"],
      after: ".hv-clasica-page",
    },
  };
  html2pdf().set(opciones).from(cvRef.current).save();
};
  return (
    <div className="app-container">
      {/* Panel de edición */}
      <div className="editor-panel">
        <h1>🎨 Generador de CV Profesional</h1>

        <PersonalInfoForm data={data} setData={setData} />

        <section className="editor-section">
          <h2>💼 Perfil Profesional</h2>
          <textarea
            placeholder="Escribe un resumen de tu perfil profesional (2-3 líneas)"
            value={data.perfil}
            onChange={(e) => setData({ ...data, perfil: e.target.value })}
            rows="4"
          />
        </section>

        <ExperienceSection data={data} setData={setData} />

        <EducationSection data={data} setData={setData} />

        <SkillsSection data={data} setData={setData} />

        <DocumentUploadSection data={data} setData={setData} />

        <ColorSelector data={data} setData={setData} style={style} />

        {/* Selector de Plantilla */}
        <section className="editor-section">
          <h2>🎨 Plantilla</h2>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="template-select"
          >
            <option value="clasico">Clásico (Hoja de Vida Colombiana)</option>
            <option value="moderno">Moderno</option>
            <option value="minimalista">Minimalista</option>
            <option value="creativo">Creativo</option>
            <option value="profesional">Profesional (Sidebar)</option>
          </select>
        </section>

        {/* Botones de acción */}
        <div className="action-buttons">
          <button className="btn-save" onClick={guardar}>
            💾 Guardar
          </button>
          <button className="btn-download" onClick={descargarPDF}>
            📥 Descargar PDF
          </button>
        </div>
      </div>

      {/* Vista previa del CV */}
      <div className="preview-panel">
        <h2>👁️ Vista Previa</h2>
        <div className="cv-preview-container">
          <div ref={cvRef} className={`cv-template ${style}`}>
            {style === "clasico" ? (
              <CVTemplateClassic data={data} backgroundImage={HvPortalBg} />
            ) : style === "profesional" ? (
              <CVTemplateProfessional data={data} />
            ) : (
              <CVTemplateModern data={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;