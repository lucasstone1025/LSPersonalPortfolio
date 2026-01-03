# Lucas Stone's Portfolio

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and a space-themed design.

## Live Site

[lucasstone.co](https://lucasstone.co)

## Features

- **Responsive Design** - Optimized for all screen sizes
- **Animated UI** - Smooth animations powered by Framer Motion
- **Interactive Star Field** - Dynamic space-themed background
- **Project Showcase** - Detailed project pages with tech stacks
- **Skills Display** - Categorized technical skills with icons
- **Contact Form** - Working email form via EmailJS
- **Smooth Navigation** - Single-page scroll with section highlighting

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React 18, React Router |
| Styling | Tailwind CSS |
| Build Tool | Vite |
| Animations | Framer Motion |
| Forms | React Hook Form, EmailJS |
| Icons | React Icons |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/lucasstone1025/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your EmailJS credentials

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your credentials from [EmailJS](https://www.emailjs.com/).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── components/
│   ├── backgrounds/    # StarField, EarthElement
│   ├── layout/         # Navbar, Footer, Layout
│   ├── sections/       # Hero, About, Projects, Skills, Contact
│   └── ui/             # Button, ProjectCard, SkillCard
├── data/               # Static content (projects, skills, education)
├── pages/              # Home, ProjectDetail
├── App.jsx
└── main.jsx
```

## Customization

### Update Content

Edit the data files in `/src/data/`:
- `about.js` - Bio and highlights
- `projects.js` - Project details
- `skills.js` - Technical skills
- `education.js` - Education and certifications
- `social.js` - Social media links

### Update Styling

- Colors defined in `tailwind.config.js`
- Global styles in `src/index.css`

## Deployment

Build the production bundle:

```bash
npm run build
```

The `dist/` folder can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## License

MIT

## Author

**Lucas Stone**
- GitHub: [@lucasstone1025](https://github.com/lucasstone1025)
- LinkedIn: [Lucas Stone](https://www.linkedin.com/in/lucas-stone-814a36315/)
