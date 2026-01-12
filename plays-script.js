// Video data for Plays - Add your videos here
const playsData = [
    {
        title: "The Tempest - Act 1 Scene 2",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Filler video
        description: "A powerful performance from Shakespeare's The Tempest",
        type: "youtube"
    },
    {
        title: "Hamlet's Soliloquy",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Filler video
        description: "To be or not to be - a classic monologue",
        type: "youtube"
    },
    {
        title: "Romeo and Juliet - Balcony Scene",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Filler video
        description: "The iconic balcony scene reimagined",
        type: "youtube"
    },
    {
        title: "Macbeth - Final Act",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Filler video
        description: "A dramatic conclusion to the Scottish play",
        type: "youtube"
    },
    {
        title: "A Midsummer Night's Dream",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Filler video
        description: "Comedic performance in the enchanted forest",
        type: "youtube"
    }
];

// Function to create video element
function createVideoElement(item) {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';

    const title = document.createElement('h3');
    title.textContent = item.title;

    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';

    let mediaElement;

    if (item.type === 'youtube') {
        // Extract YouTube video ID from URL or use direct embed URL
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

// Render videos
function renderVideos() {
    const playsGrid = document.getElementById('plays-grid');

    if (!playsGrid) return;

    playsData.forEach(play => {
        playsGrid.appendChild(createVideoElement(play));
    });

    if (playsData.length === 0) {
        playsGrid.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1 / -1;">No plays available yet. Check back soon!</p>';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderVideos);
