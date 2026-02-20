import { useState, useRef } from "react";
import axios from "axios";
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
import ReferenciasPersonalesSection from "./assets/Referenciaspersonalessection";
import ReferenciasFamiliaresSection from "./assets/Referenciasfamiliaressection";
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
    lugarNacimiento: "",
    lugarExpedicion: "",
    identificacion: "",
    direccion: "",
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
    referenciasPersonales: [],
    referenciasFamiliares: [],
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
    const nombreArchivo =
      "CV_" +
      (data.nombre && data.apellidos
        ? `${data.nombre}_${data.apellidos}`
        : "HojaDeVida"
      ).replace(/\s+/g, "_");

    const tituloOriginal = document.title;
    document.title = nombreArchivo;
    // Agregar clase que elimina márgenes y fondos grises entre páginas
    document.body.classList.add("printing");
    window.print();
    setTimeout(() => {
      document.title = tituloOriginal;
      document.body.classList.remove("printing");
    }, 1000);
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

        <ReferenciasPersonalesSection data={data} setData={setData} />

        <ReferenciasFamiliaresSection data={data} setData={setData} />

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