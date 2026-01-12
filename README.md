# Tyler Wright Website

A simple, modern website for showcasing Tyler Wright's plays and songs. Hosted on Netlify.

## Setup

1. **Add Videos**:
   - Create a `videos` folder in the root directory
   - Add your video files (MP4 format recommended)
   - Update `script.js` with your video information

2. **Configure Videos**:
   Open `script.js` and add your videos to the `videoData` object:

   ```javascript
   const videoData = {
       plays: [
           {
               title: "Play Title",
               videoUrl: "videos/play1.mp4",
               description: "Description here",
               type: "video"
           }
       ],
       songs: [
           {
               title: "Song Title",
               videoUrl: "videos/song1.mp4",
               description: "Description here",
               type: "video"
           }
       ]
   };
   ```

3. **Video Options**:
   - **Local videos**: Use `type: "video"` and provide the path to your video file
   - **YouTube**: Use `type: "youtube"` and provide the full YouTube URL
   - **Vimeo**: Use `type: "vimeo"` and provide the full Vimeo URL

## Deployment to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root directory)
6. Click "Deploy site"

## File Structure

```
tylerwrightwebsite/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript and video configuration
├── netlify.toml        # Netlify configuration
├── videos/             # Video files folder (create this)
└── README.md           # This file
```

## Adding New Videos

Simply edit `script.js` and add new entries to the `plays` or `songs` arrays. Then:
- If using local videos: Add the video file to the `videos/` folder
- If using YouTube/Vimeo: Just update the URL in the script

After making changes, commit and push to your repository. Netlify will automatically redeploy your site.
