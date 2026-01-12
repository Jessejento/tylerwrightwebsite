# Tyler Wright Website

A modern React + Vite website for showcasing Tyler Wright's community theater work, band shows, and original music. Hosted on Netlify.

## Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Add Media Content**:
   - Edit `src/data/mediaData.js` to add your videos and audio
   - For videos: Use YouTube embed URLs or local video files
   - For audio: Add MP3 file URLs or use audio hosting services

## Configuration

### Adding Videos

Edit `src/data/mediaData.js`:

```javascript
export const mediaData = {
  plays: [
    {
      title: "Play Title",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
      description: "Description here",
      type: "youtube"
    }
  ],
  shows: [
    {
      title: "Show Title",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
      description: "Description here",
      type: "youtube"
    }
  ],
  audio: [
    {
      title: "Song Title",
      audioUrl: "https://example.com/song.mp3",
      description: "Description here"
    }
  ]
}
```

### Video Options
- **YouTube**: Use `type: "youtube"` and provide the YouTube embed URL
- **Vimeo**: Use `type: "vimeo"` and provide the Vimeo URL
- **Local videos**: Place in `public/videos/` and reference as `/videos/filename.mp4`

## Deployment to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Build settings (automatically configured via `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

Netlify will automatically build and deploy your site. Future pushes to your main branch will trigger automatic deployments.

## File Structure

```
tylerwrightwebsite/
├── src/
│   ├── components/      # Reusable components (Header, Footer, Layout)
│   ├── pages/           # Page components (Home, Headshots, Plays, Media, Contact)
│   ├── data/            # Data files (mediaData.js)
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css         # Global styles
├── public/              # Static assets (videos, images)
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
└── netlify.toml         # Netlify configuration
```

## Development

- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`

## Adding New Content

1. **Videos/Audio**: Edit `src/data/mediaData.js`
2. **Text Content**: Edit the page components in `src/pages/`
3. **Styling**: Edit `src/index.css`

After making changes, commit and push to your repository. Netlify will automatically redeploy.
