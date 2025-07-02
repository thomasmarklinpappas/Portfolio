# Thomas Pappas - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Shadcn UI. Features server-side rendering, theme switching, and a comprehensive CI/CD pipeline.

## 🚀 Features

- **Next.js 14** with App Router and Server-Side Rendering
- **TypeScript** for type safety
- **Shadcn UI** for beautiful, accessible components
- **Theme Toggle** (Light/Dark/System)
- **Docker** containerization
- **CI/CD Pipeline** with GitHub Actions
- **Responsive Design** with Tailwind CSS
- **Framer Motion** animations
- **Contact Form** with email functionality

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Animations**: Framer Motion
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel (recommended)

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd My-Portfolio-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Docker Development

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Or build and run manually**
   ```bash
   # Build the image
   npm run docker:build
   
   # Run the container
   npm run docker:run
   ```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Docker Production

```bash
# Build production image
docker build -t portfolio-prod .

# Run production container
docker run -p 3000:3000 portfolio-prod
```

## 📁 Project Structure

```
My-Portfolio-main/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── animations/        # Animation components
│   ├── form/             # Form components
│   ├── sections/         # Page sections
│   └── ui/               # Shadcn UI components
├── context/              # React context providers
├── lib/                  # Utility functions
├── public/               # Static assets
├── __tests__/            # Test files
├── .github/workflows/    # CI/CD pipelines
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose
└── jest.config.js        # Jest configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_CURRENT_SITE_URL=http://localhost:3000
REVALIDATE_INTERVAL=600
```

### Theme Configuration

The app supports three themes:
- **Light**: Clean, bright interface
- **Dark**: Modern dark theme
- **System**: Follows OS preference

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Live Demo**: [Your deployed URL]
- **GitHub**: [Your GitHub profile]
- **LinkedIn**: [Your LinkedIn profile]
