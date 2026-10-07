export default function HomePage() {
  return (
    <section className="main-screen home-screen">
      <div className="screen-copy">
        <p className="intro">Hey, I’m</p>
        <h1>Mephisto Fallout</h1>
        <p className="hero-description">
          Ini adalah template website personal gratis yang bisa kamu gunakan dan kamu modifikasi sesuka hati.
          Template ini dibuat dengan React dan Tailwind CSS, sehingga mudah untuk dikustomisasi dan diintegrasikan dengan proyekmu sendiri.
        </p>
        <a className="terminal-button" href="/projects"><span>›</span> VIEW MY PROJECTS</a>
      </div>
      <div className="hero-art" aria-label="Retro terminal illustration">
        <div className="sun-disc" />
        <div className="vault-person">
          <div className="person-hair" />
          <div className="person-head"><i /><b /><em /></div>
          <div className="person-neck" />
          <div className="person-body"><span>13</span></div>
          <div className="person-arm arm-left" />
          <div className="person-arm arm-right" />
          <div className="thumbs-up"><i /></div>
        </div>
        <div className="good-luck">Good<br />Luck!</div>
      </div>
    </section>
  )
}
