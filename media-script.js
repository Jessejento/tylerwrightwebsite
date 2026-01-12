// Media data - Add your videos and audio here
const mediaData = {
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
};

// Function to create video element
function createVideoElement(item) {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';

    const title = document.createElement('h4');
    title.textContent = item.title;

    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';

    let mediaElement;

    if (item.type === 'youtube') {
        let videoId;
        if (item.videoUrl.includes('youtube.com/embed/')) {
            videoId = item.videoUrl.split('youtube.com/embed/')[1].split('?')[0];
        } else {
            videoId = extractYouTubeId(item.videoUrl);
        }
        mediaElement = document.createElement('iframe');
        mediaElement.src = `https://www.youtube.com/embed/${videoId}`;
        mediaElement.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        mediaElement.allowFullscreen = true;
    } else if (item.type === 'vimeo') {
        const videoId = extractVimeoId(item.videoUrl);
        mediaElement = document.createElement('iframe');
        mediaElement.src = `https://player.vimeo.com/video/${videoId}`;
        mediaElement.allow = 'autoplay; fullscreen; picture-in-picture';
        mediaElement.allowFullscreen = true;
    } else {
        mediaElement = document.createElement('video');
        mediaElement.controls = true;
        const source = document.createElement('source');
        source.src = item.videoUrl;
        source.type = 'video/mp4';
        mediaElement.appendChild(source);
    }

    videoWrapper.appendChild(mediaElement);

    const description = document.createElement('p');
    description.className = 'video-description';
    description.textContent = item.description || '';

    videoItem.appendChild(title);
    videoItem.appendChild(videoWrapper);
    videoItem.appendChild(description);

    return videoItem;
}

// Function to create audio element
function createAudioElement(item) {
    const audioItem = document.createElement('div');
    audioItem.className = 'audio-item';

    const title = document.createElement('h4');
    title.textContent = item.title;

    const audioElement = document.createElement('audio');
    audioElement.controls = true;
    const source = document.createElement('source');
    source.src = item.audioUrl;
    source.type = 'audio/mpeg';
    audioElement.appendChild(source);

    const description = document.createElement('p');
    description.className = 'audio-description';
    description.textContent = item.description || '';

    audioItem.appendChild(title);
    audioItem.appendChild(audioElement);
    audioItem.appendChild(description);

    return audioItem;
}

// Extract YouTube video ID from URL
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Extract Vimeo video ID from URL
function extractVimeoId(url) {
    const regExp = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
    const match = url.match(regExp);
    return match ? match[1] : null;
}

// Render media
function renderMedia() {
    const playsGrid = document.getElementById('plays-grid');
    const showsGrid = document.getElementById('shows-grid');
    const audioGrid = document.getElementById('audio-grid');

    if (playsGrid) {
        mediaData.plays.forEach(item => {
            playsGrid.appendChild(createVideoElement(item));
        });
    }

    if (showsGrid) {
        mediaData.shows.forEach(item => {
            showsGrid.appendChild(createVideoElement(item));
        });
    }

    if (audioGrid) {
        mediaData.audio.forEach(item => {
            audioGrid.appendChild(createAudioElement(item));
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderMedia);
