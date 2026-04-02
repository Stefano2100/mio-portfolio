import { useEffect, useState, useRef } from 'react'
import './App.css'

function SkillRow({ name, percentage }) {
  const [width, setWidth] = useState("0%");
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setWidth(percentage);
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="skill-row" ref={barRef}>
      <span className="skill-name">{name}</span>
      <div className="bar">
        <div className="fill" style={{ width: width }}></div>
      </div>
      <span className="skill-percentage">{percentage}</span>
    </div>
  );
}

function GitHubProjects() {
  const projects = [
    { id: 1, name: 'Progetto-Database', description: 'Progetto di database per il corso universitario', language: 'Rich Text Format', html_url: 'https://github.com/Stefano2100/Progetto-Database' },
    { id: 2, name: 'R_programming', description: 'Esercizi e progetti in linguaggio R', language: 'R', html_url: 'https://github.com/Stefano2100/R_programming' },
    { id: 3, name: 'PROG-1', description: 'Tutto il materiale con esercizi svolti anche laboratorio', language: 'C++', html_url: 'https://github.com/Stefano2100/PROG-1' },
    { id: 4, name: 'PROG-2', description: 'Tutto il materiale con esercizi svolti anche laboratorio', language: 'C++', html_url: 'https://github.com/Stefano2100/PROG-2' },
    { id: 5, name: 'Ingegneria-del-software', description: 'Materiale del corso di Ingegneria del Software', language: 'Java', html_url: 'https://github.com/Stefano2100/Ingegneria-del-software' },
    { id: 6, name: 'Progetto-sviluppo-giochi-digitali', description: 'CONTIENE LA CARTELLA DEL GIOCO, E LA STRUTTURA DEI METODI', language: 'ShaderLab', html_url: 'https://github.com/Stefano2100/Progetto-sviluppo-giochi-digitali' }
  ];

  return (
    <div className="container">
      <div className="Percorso"><h1>I Miei Progetti</h1></div>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-language">{project.language}</div>
            <a href={project.html_url} target="_blank" className="project-btn">Codice</a>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="barra">
        <h1 className="titolo">Stefano Martucci</h1>
      </div>

      <section className="section-white">
        <div className="container">
          <div id="center">
            <div className="hero">
              <img src="fotocurr.png" className="base" width="170" height="179" alt="" />
            </div>
            <div>
              <h1>Stefano Martucci</h1>
              <h2>Informatico</h2>
              <p>Nato il 21/06/2002, domiciliato a Catania,</p>
              <p>appassionato di informatica, programmazione e tecnologia in generale,</p>
              <p>mi piace stare al passo coi tempi e acquisire nuove conoscenze.</p>
            </div>
            <div className="buttons">
              <a href="mailto:tuaemail@email.com" className="btn">Contattami</a>
              <a href="https://github.com/Stefano2100" className="secondary">GitHub</a>
              <a href="https://www.linkedin.com/in/stefano-martucci-3181a130a/" className="three">Linkedin</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container">
          <div className="Percorso"><h1>Percorso formativo</h1></div>
          <div id="next-steps">
            <div className="card">
              <div className="card-header">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                <h3 className="card-title">Laureando in Informatica</h3>
              </div>
              <p className="card-link">Università degli Studi di Catania</p>
              <p className="card-year">2025</p>
              <p className="card-desc">Laurea triennale in informatica, tesi: 'Aerial object recognition with neural networks'</p>
            </div>
            <div className="card">
              <div className="card-header">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <h3 className="card-title">Segretario IT</h3>
              </div>
              <p className="card-link">Scuola Superiore, Catania</p>
              <p className="card-year">2025</p>
              <p className="card-desc">Gestione sistemi informatici e supporto tecnico.</p>
            </div>
            <div className="card">
              <div className="card-header">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                <h3 className="card-title">Diploma Liceo Scientifico A.Volta(CL)</h3>
              </div>
              <p className="card-link">Liceo Scientifico A.Volta, Caltanissetta</p>
              <p className="card-year">2020</p>
              <p className="card-desc">Diplomato al Liceo Scientifico Alessandro Volta di Caltanissetta</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container">
          <div className="Percorso"><h1>Competenze tecniche</h1></div>
          <div className="Comp-griglia">
            <div className="Comp">
              <h3 className="Comp-title">Frontend</h3>
              <div className="tags-container">
                <span className="skill-tag t-blue">React</span>
                <span className="skill-tag t-orange">HTML</span>
                <span className="skill-tag t-purple">CSS</span>
                <span className="skill-tag t-green">JavaScript</span>
              </div>
            </div>
            <div className="Comp">
              <h3 className="Comp-title">Database</h3>
              <div className="tags-container">
                <span className="skill-tag t-red">MySQL</span>
                <span className="skill-tag t-cyan">MongoDB</span>
                <span className="skill-tag t-indigo">SQL</span>
              </div>
            </div>
            <div className="Comp">
              <h3 className="Comp-title">Tools</h3>
              <div className="tags-container">
                <span className="skill-tag t-pink">Git</span>
                <span className="skill-tag t-teal">Docker</span>
                <span className="skill-tag t-gray">Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container">
          <div className="skills-bar-section">
            <h2>Linguaggi padroneggiati</h2>
            <SkillRow name="C++" percentage="95%" />
            <SkillRow name="Python" percentage="85%" />
            <SkillRow name="JavaScript" percentage="80%" />
            <SkillRow name="HTML" percentage="80%" />
            <SkillRow name="CSS" percentage="75%" />
            <SkillRow name="C#" percentage="60%" />
          </div>
        </div>
      </section>

      <section className="section-white">
        <GitHubProjects />
      </section>

      <div id="spacer"></div>

      <footer className="footer-bar">
        <p>© 2026 Stefano Martucci. Sviluppato con React e Tailwind CSS.</p>
      </footer>
    </>
  )
}
export default App;