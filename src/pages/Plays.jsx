export default function Plays() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <h2>Plays</h2>
          <p>Theater work</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="resume-content">
            <div className="resume-section">
              <h3>Theater</h3>
              <div className="resume-item">
                <div className="resume-role">
                  <strong>Role Name</strong> - <em>Production Name</em>
                </div>
                <div className="resume-venue">Theater / Year</div>
              </div>
              <div className="resume-item">
                <div className="resume-role">
                  <strong>Role Name</strong> - <em>Production Name</em>
                </div>
                <div className="resume-venue">Theater / Year</div>
              </div>
              <p className="resume-note">Add my theater roles here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
