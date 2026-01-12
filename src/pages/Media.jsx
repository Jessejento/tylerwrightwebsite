import { mediaData, getVideoEmbedUrl } from '../data/mediaData'

function VideoItem({ item }) {
  const embedUrl = getVideoEmbedUrl(item.videoUrl, item.type)

  return (
    <div className="video-item">
      <h4>{item.title}</h4>
      <div className="video-wrapper">
        <iframe
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={item.title}
        />
      </div>
      <p className="video-description">{item.description}</p>
    </div>
  )
}

function AudioItem({ item }) {
  return (
    <div className="audio-item">
      <h4>{item.title}</h4>
      <audio controls>
        <source src={item.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p className="audio-description">{item.description}</p>
    </div>
  )
}

export default function Media() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <h2>Media</h2>
          <p>Theater, band shows, and original songs</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="media-section">
            <h3>Theater</h3>
            <div className="video-grid">
              {mediaData.plays.map((play, index) => (
                <VideoItem key={index} item={play} />
              ))}
            </div>
          </div>

          <div className="media-section">
            <h3>Band Shows</h3>
            <div className="video-grid">
              {mediaData.shows.map((show, index) => (
                <VideoItem key={index} item={show} />
              ))}
            </div>
          </div>

          <div className="media-section">
            <h3>Original Songs</h3>
            <div className="audio-grid">
              {mediaData.audio.map((audio, index) => (
                <AudioItem key={index} item={audio} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
