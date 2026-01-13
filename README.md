    
# Twilight Prod – Cinematic Production Portfolio

![Project Banner](https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop)

> A high-performance, interactive portfolio website designed for **Twilight Prod**, a premier Tunisian production house. Built with the **"North African Futurism"** aesthetic in mind, utilizing deep void aesthetics, smooth physics-based scrolling, and seamless page transitions.

## 🚀 Features

*   **Cinematic Core:**
    *   **Lenis Smooth Scroll:** Weighty, momentum-based scrolling that feels like a film reel.
    *   **GSAP Animations:** Scroll-triggered reveals, stagger effects, and timeline choreography.
    *   **View Transitions:** Zero-latency navigation with "curtain" page wipes.
*   **Immersive UI:**
    *   **Void Theme:** Deep black (`#030014`) palette with Sunset Orange (`#ff4b1f`) accents.
    *   **Glassmorphism:** Dynamic, blurred navigation bar that reacts to scroll position.
    *   **Custom Cursor:** Magnetic, interactive cursor built with React.
    *   **Video Backgrounds:** Full-screen hero loops and hybrid video players (Local + YouTube).
*   **Content Engine:**
    *   **Markdown CMS:** Manage projects easily via Markdown files.
    *   **Smart Grid:** Asymmetrical masonry layout for showcasing work.
    *   **Tunisian Context:** Integrated WhatsApp contact, localized address, and bilingual-ready typography.

## 🛠 Tech Stack

*   **Framework:** [Astro 5.0](https://astro.build) (Static + Hybrid Rendering)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (Utility-first)
*   **Interactivity:** [React 19](https://react.dev) (Islands Architecture)
*   **Motion:** [GSAP](https://greensock.com) + [Lenis](https://lenis.darkroom.engineering)
*   **Type Safety:** TypeScript

## 📂 Project Structure

```text
twilight-prod/
├── public/
│   └── videos/           # Store local MP4 files here (under 10MB recommended)
├── src/
│   ├── components/       # UI Elements (Nav, Cursor, ContactButton)
│   ├── content/
│   │   └── blog/         # PROJECT DATA (Markdown files live here)
│   ├── layouts/          # Main HTML wrapper (Smooth Scroll setup)
│   ├── pages/            # Routes (Home, Contact, Agency)
│   └── styles/           # Global CSS & Tailwind Theme
└── astro.config.mjs      # Configuration

  

⚡️ Getting Started
1. Installation

Clone the repository and install dependencies.
code Bash

    
git clone https://github.com/yourusername/twilight-prod.git
cd twilight-prod
npm install

  

2. Development

Start the local server.
code Bash

    
npm run dev

  

Visit http://localhost:4321 to see the site.
3. Production Build

To see the actual performance (prefetching, optimized assets), build the project.
code Bash

    
npm run build
npm run preview

  

📝 Managing Content

To add a new project case study, create a new .md file in src/content/blog/.

Example: src/content/blog/project-name.md
code Markdown

    
---
title: "Project Name"
client: "Client Name"
service: "Service Type (e.g., TV Spot)"
date: "2026-01-01"
roles: ["Director: Name", "DOP: Name"]
# Option A: Local Video (Recommended)
videoFile: "/videos/my-video.mp4"
# Option B: YouTube Embed
youtubeId: "" 
---

# Project Description

Write the case study content here using standard Markdown...

  

🎨 Customization Guide
Changing the Hero Video

Replace the source URL in src/pages/index.astro:
code Html

    
<source src="/videos/your-new-hero-loop.mp4" type="video/mp4" />

  

Updating Contact Details

    Phone/Email: Update src/pages/contact.astro.

    WhatsApp: Update the number in src/components/ContactButton.jsx.

    Footer: Update src/layouts/Layout.astro.

⚠️ Troubleshooting

"Lenis not found" error:
Ensure you are using the correct package name.
code Bash

    
npm uninstall @studio-freight/lenis
npm install lenis

  

Animations feel laggy in Dev:
This is normal due to Vite's Just-In-Time compilation. Run npm run build && npm run preview to test the silky smooth production version.
📄 License

Designed for Twilight Prod.
© 2026 Twilight Prod TN. All Rights Reserved.