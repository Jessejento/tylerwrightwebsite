export const mediaData = {
  plays: [
    {
      title: "The Tempest - Act 1 Scene 2",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "A powerful performance from Shakespeare's The Tempest",
      type: "youtube"
    },
    {
      title: "Hamlet's Soliloquy",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "To be or not to be - a classic monologue",
      type: "youtube"
    },
    {
      title: "Romeo and Juliet - Balcony Scene",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "The iconic balcony scene reimagined",
      type: "youtube"
    }
  ],
  shows: [
    {
      title: "Live Show - Venue Name",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Band performance at local venue",
      type: "youtube"
    },
    {
      title: "Acoustic Set",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Acoustic performance",
      type: "youtube"
    }
  ],
  audio: [
    {
      title: "Original Song 1",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      description: "Original composition"
    },
    {
      title: "Original Song 2",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      description: "Original composition"
    }
  ]
}

function extractYouTubeId(url) {
  if (url.includes('youtube.com/embed/')) {
    return url.split('youtube.com/embed/')[1].split('?')[0]
  }
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

export function getVideoEmbedUrl(videoUrl, type) {
  if (type === 'youtube') {
    const videoId = extractYouTubeId(videoUrl)
    return `https://www.youtube.com/embed/${videoId}`
  }
  return videoUrl
}
