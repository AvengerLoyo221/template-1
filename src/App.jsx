import SidePanel from './components/SidePanel.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

const pages = [
  { label: 'HOME', path: '/', Page: HomePage },
  { label: 'ABOUT', path: '/about', Page: AboutPage },
  { label: 'PROJECTS', path: '/projects', Page: ProjectsPage },
]

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const current = pages.find((page) => page.path === path) ?? pages[0]

  return (
    <main className="pipboy-case">
      <div className="case-screws" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="display-bezel">
        <div className="display-glass">
          <header className="topbar">
            <a className="brand" href="/" aria-label="Mephisto home">
              <svg className="signal-mark" viewBox="0 0 42 20" aria-hidden="true">
                <path d="M2 10h9m20 0h9M11 5h20v10H11z" />
                <circle cx="21" cy="10" r="4" />
              </svg>
              <span>TEMPLATE<span className="brand-sub">’S BY MEPHISTO</span></span>
            </a>
            <nav aria-label="Main navigation">
              {pages.map((page) => (
                <a
                  key={page.path}
                  className={page === current ? 'nav-link active' : 'nav-link'}
                  href={page.path}
                  aria-current={page === current ? 'page' : undefined}
                >
                  {page.label}
                </a>
              ))}
            </nav>
          </header>
          <current.Page />
        </div>
      </div>
      <SidePanel />
    </main>
  )
}
