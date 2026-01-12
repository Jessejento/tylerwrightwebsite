export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&q=80"
                alt="Tyler Wright"
                className="hero-image"
              />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">Tyler Wright</h1>
              <p className="hero-subtitle">theater • band • original music</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-content">
            <h2><strong>I'm an actor, musician and performer.</strong></h2>
            <p>
              I perform in theater productions and play with my band. I write original songs
              and enjoy bringing stories to life both on stage and through music.
            </p>
            <p>
              You can check out my theater work, original songs, and live performances here.
              This site is a place to share what I've been working on.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
