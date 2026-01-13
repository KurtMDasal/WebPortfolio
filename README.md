# Cut By Kurt - Video Editor Portfolio

A modern, high-end one-page portfolio website for a professional video editor with a dark, cinematic aesthetic featuring neon green and blue accents.

## Features

- **Dark, Premium Design**: Near-black background with neon green (#A6FF00) and electric blue (#4C5CFF) accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Portfolio**: Filterable portfolio grid with modal view for project details
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Modern Typography**: Clean, bold Inter font family
- **Fast Loading**: Lightweight and optimized for performance

## File Structure

```
Portfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Local Development**: For best results, use a local server:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve`
   - VS Code: Use the Live Server extension

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --bg-dark: #0B0B0B;
    --bg-dark-alt: #111111;
    --accent-green: #A6FF00;
    --accent-blue: #4C5CFF;
}
```

### Portfolio Items
1. Add new portfolio items in `index.html` within the `.portfolio-grid` section
2. Update the `portfolioData` object in `script.js` with project details
3. Set the `data-category` attribute to match filter categories

### Content
- Update hero section text in `index.html`
- Modify services, testimonials, and workflow steps
- Replace placeholder thumbnails with actual video thumbnails or embeds

### Video Embeds
Replace the video placeholder in the modal with actual video embeds:
```html
<iframe src="YOUR_VIDEO_URL" frameborder="0" allowfullscreen></iframe>
```

## Sections

1. **Hero**: Eye-catching headline with CTAs
2. **Services**: What you offer (4 service cards)
3. **Portfolio**: Filterable grid of your work
4. **Workflow**: Your 4-step process
5. **Testimonials**: Client feedback
6. **CTA**: Final call-to-action
7. **Footer**: Contact links and branding

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized CSS with minimal animations
- Efficient JavaScript with event delegation
- No external dependencies (except Google Fonts)

## License

Free to use and modify for your portfolio.

---

**Built with ❤️ for professional video editors**
