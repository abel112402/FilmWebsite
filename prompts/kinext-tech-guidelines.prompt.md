---
name: kinext-tech-guidelines
description: Core technical and design guidelines for the Kinext website. Always apply these rules when generating code for this project.
---

### 1. Tech Stack & Architecture
- Use strictly Native HTML5, CSS3, and Vanilla JavaScript. No frameworks or libraries unless explicitly requested.
- Create a modular file structure (separate .html, .css, and .js files).
- Media assets must be strictly loaded from the `/assets` directory (e.g., `<img src="/assets/image.jpg">`).

### 2. Design Tokens & CSS Variables
Always implement the following CSS variables in the `:root` pseudo-class and use them throughout the styles:

\`\`\`css
:root {
  /* Colors */
  --kinext-black: #000000;
  --kinext-off-white: #FFF9F2;
  --kinext-beige: #F7ECDF;
  --kinext-teal-light: #96C1C5;
  --kinext-teal-dark: #5D6A6B;
  
  /* Background & Text Defaults */
  --bg-primary: var(--kinext-black);
  --text-primary: var(--kinext-off-white);
  
  /* Typography */
  /* Import these from Google Fonts if not available locally */
  --font-primary: 'Fragment Mono SC', monospace;
  --font-logo: 'Rubik Spray Paint', cursive;
}
\`\`\`

### 3. UI/UX & Design Rules
- **Typography Usage:** Use `var(--font-primary)` for all headings, body text, and UI elements. Use `var(--font-logo)` ONLY for the Kinext text logo.
- **Visual Style:** Modern, clean, flat, and minimalist. Emphasize the creative and professional nature of the Kinext film studio. Use sharp corners (`border-radius: 0`) to match the monospaced/tech aesthetic unless specified otherwise. 
- **Image Inspiration vs. Assets:** Use the images found in the `/inspiration` directory to guide the visual mood, layout spacing, color balance, and overall aesthetic. However, for the actual media elements rendered on the page, ONLY use the files located in the `/assets` directory.
- **Future-proofing Backgrounds:** Structure the HTML containers and CSS so that background images or videos can be easily added to sections later. Include placeholder classes, proper `z-index` layering, and ensure text contrast overlays are ready for future media integration.
- **Reference:** Match the layout and premium feel of: https://coppola.qodeinteractive.com/film-festival/
- **Responsiveness:** Must be fully responsive across all devices (Mobile-first approach).

### 4. Code Quality & Standards
- **SEO & Accessibility:** Use semantic HTML tags. Ensure WCAG accessibility standards (alt tags, aria-labels, readable contrast).
- **Performance:** Optimize for fast loading times.
- **Maintainability:** Write clean, well-commented code.