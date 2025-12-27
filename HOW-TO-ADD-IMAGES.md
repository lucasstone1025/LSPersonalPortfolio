# How to Add Images and Logos to Your Portfolio

## Quick Guide: Adding Your University Logo

### Step 1: Download the Logo
1. Google: "Florida State University logo png transparent"
2. Or visit: https://www.fsu.edu (look for Brand Guidelines or Media Resources)
3. Download the PNG or SVG version

### Step 2: Save the Logo
1. Save your downloaded logo file as: `fsu-logo.png`
2. Place it in: `/Users/lucasstone/Desktop/Portfolio/public/logos/`
3. Your file path should be: `/Users/lucasstone/Desktop/Portfolio/public/logos/fsu-logo.png`

### Step 3: It's Already Configured!
The logo is already set up in `src/data/education.js`:
```javascript
logo: "/logos/fsu-logo.png"
```

### That's it!
Once you add the logo file, refresh your browser and it will appear in the Education section.

---

## How Images Work in Vite/React

### Public Folder (Recommended for logos/images)
- **Location**: `/public/logos/` or `/public/projects/`
- **How to use**: `/logos/your-image.png` (starts with `/`)
- **Best for**: Logos, project screenshots, static images

**Example:**
```javascript
// In your data file
logo: "/logos/university-logo.png"

// In a component
<img src="/projects/my-project.png" alt="My Project" />
```

### Imported Images (Alternative method)
- **Location**: Anywhere in `/src/`
- **How to use**: Import the image first

**Example:**
```javascript
import logo from '../assets/logo.png'

<img src={logo} alt="Logo" />
```

---

## Folder Structure for Images

```
Portfolio/
├── public/
│   ├── logos/
│   │   ├── fsu-logo.png           ← University logo
│   │   └── company-logo.png       ← For experience section (future)
│   └── projects/
│       ├── project1.png           ← Project screenshots
│       ├── project2.png
│       └── portfolio-website.png
├── src/
    └── ...
```

---

## Best Practices

### 1. Image Formats
- **PNG**: Best for logos with transparency
- **SVG**: Best for logos (scales perfectly, smallest file size)
- **JPG/JPEG**: Best for photos/screenshots
- **WebP**: Modern format, smaller size (convert with online tools)

### 2. Image Sizes
- **Logos**: 200x200px to 500x500px is plenty
- **Project screenshots**: 1200px wide max
- **Keep file sizes under 500KB** (compress if needed)

### 3. File Naming
- Use lowercase
- Use dashes instead of spaces: `florida-state-logo.png` ✅
- Avoid spaces: `Florida State Logo.png` ❌

### 4. Compression Tools (Free)
- **TinyPNG**: https://tinypng.com (drag & drop to compress)
- **Squoosh**: https://squoosh.app (Google's image optimizer)

---

## Adding Project Screenshots

### 1. Take or find screenshots of your projects
### 2. Save them in `/public/projects/`
### 3. Update `src/data/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "My Awesome Project",
    description: "Description here",
    image: "/projects/my-awesome-project.png", // ← Add this
    techStack: ["React", "Node.js"],
    githubUrl: "...",
    liveUrl: "...",
  },
];
```

---

## Where to Find Logos

### University Logos
- Official university website → "Brand Guidelines" or "Logos"
- Google: "[University Name] logo png transparent"

### Company Logos (for future experience section)
- **Brandfetch**: https://brandfetch.com
- **Clearbit**: https://clearbit.com/logo
- Company's official press kit / brand page

### Tech Logos
- Already included via react-icons! (No download needed)
- Custom logos: Same process as university logos

---

## Troubleshooting

### Logo not showing?
1. Check the file path is correct: `/logos/fsu-logo.png`
2. Make sure file is in `/public/logos/` folder
3. Check file name matches exactly (case-sensitive)
4. Refresh browser with hard reload: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

### Logo looks blurry?
- Use a higher resolution image
- Try SVG format instead of PNG

### Logo has white background?
- Download a PNG with transparency
- Or use a tool like https://www.remove.bg to remove background

---

## Quick Reference

| What you want | Where to put it | How to reference it |
|---------------|----------------|---------------------|
| University logo | `/public/logos/uni.png` | `"/logos/uni.png"` |
| Project screenshot | `/public/projects/proj.png` | `"/projects/proj.png"` |
| Company logo | `/public/logos/company.png` | `"/logos/company.png"` |

---

Need help? The code is already set up - just add the image file and it will work!
