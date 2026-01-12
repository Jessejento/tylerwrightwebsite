export default function Headshots() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <h2>Headshots</h2>
          <p>Professional photos for commercial and theatrical work</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="headshots-grid">
            <div className="headshot-category">
              <h3>Commercial Headshots</h3>
              <div className="headshot-gallery">
                <div className="headshot-item">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
                    alt="Commercial Headshot 1"
                    className="headshot-image"
                  />
                </div>
                <div className="headshot-item">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop"
                    alt="Commercial Headshot 2"
                    className="headshot-image"
                  />
                </div>
              </div>
            </div>

            <div className="headshot-category">
              <h3>Theatrical Headshots</h3>
              <div className="headshot-gallery">
                <div className="headshot-item">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop"
                    alt="Theatrical Headshot 1"
                    className="headshot-image"
                  />
                </div>
                <div className="headshot-item">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop"
                    alt="Theatrical Headshot 2"
                    className="headshot-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
