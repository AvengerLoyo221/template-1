import { projects } from '../data/projects.js'

const EMAIL = 'hello@mephisto.dev'

export default function ProjectsPage() {
  return (
    <section className="main-screen inner-screen">
      <div className="page-content">
        <h1 className="page-title">Proyek-proyek saya</h1>
        <p className="page-lead">Beberapa proyek yang telah saya kerjakan.</p>
        <div className="project-list">
          {projects.map((project, index) => {
            const number = String(index + 1).padStart(2, '0')
            return (
              <article className="project-card" key={project.name}>
                <div className="project-preview-screen">
                  <span className="preview-label">PROYEK {number}</span>
                  <strong>{project.code}</strong>
                  <div className="preview-lines"><i /><i /><i /></div>
                </div>
                <div className="project-info">
                  <div className="project-type">{project.type}</div>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <div className="project-stack">{project.stack}</div>
                  <a href={`mailto:${EMAIL}?subject=Project%20enquiry`}>› ASK ME ABOUT THIS</a>
                </div>
                <span className="project-index">{number}</span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
