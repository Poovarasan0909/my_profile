# Personal Portfolio Website

This is a personal portfolio website built with [Next.js](https://nextjs.org/), [React](https://reactjs.org/), and [TypeScript](https://www.typescriptlang.org/). It is designed to showcase my skills, projects, and experience as a Full Stack Developer.

## Features

- **Responsive Design**: The website is fully responsive and works on all devices.
- **Dark Mode**: A dark mode toggle is available to switch between light and dark themes.
- **Animations**: The website uses [Framer Motion](https://www.framer.com/motion/) for smooth animations.
- **Component-Based Architecture**: The website is built with a component-based architecture, making it easy to maintain and scale.
- **Centralized Data**: All portfolio data is stored in a single `portfolio.ts` file, making it easy to update.

## Technologies Used

- **Frontend**:
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Material-UI](https://mui.com/)
  - [Framer Motion](https://www.framer.com/motion/)
  - [Lucide React](https://lucide.dev/)
- **Deployment**:
  - [Cloudflare Pages](https://pages.cloudflare.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployment

This project is configured for deployment on [Cloudflare Pages](https://pages.cloudflare.com/). The following scripts are available for building and deploying the project:

- `npm run pages:build`: Builds the Next.js application for Cloudflare Pages.
- `npm run preview`: Builds the application and starts a local development server to preview the Cloudflare Pages deployment.
- `npm run deploy`: Builds and deploys the application to Cloudflare Pages.
