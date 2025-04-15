# Practice Hero

A marketing website for Practice Hero, an agentic AI-powered EHR summarization tool for GPs, hosted at [practicehero.co.uk](https://www.practicehero.co.uk).

## Overview

Practice Hero helps GPs prepare for consultations by automatically summarizing patient records, reducing the time spent reviewing patient notes and allowing doctors to focus more on patient care.

## Development

This is a Next.js project using TypeScript and Tailwind CSS.

### Prerequisites

- Node.js (v18+)
- pnpm

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Deployment with Coolify

This project is set up for deployment to [practicehero.co.uk](https://www.practicehero.co.uk) using Coolify.

### Configuration

1. In Coolify, create a new service and connect your repository.
2. Choose "Docker Compose" as the deployment method.
3. Configure the following environment variables:
   - `NODE_ENV=production`
   - `PORT=3000`
   - `NEXT_PUBLIC_APP_URL=https://www.practicehero.co.uk`
   - `NEXT_PUBLIC_DOMAIN=practicehero.co.uk`
   - `NEXT_PUBLIC_SITE_NAME=Practice Hero`
   - `NEXT_PUBLIC_SITE_DESCRIPTION=AI-powered EHR summarization tool that helps GPs prepare for consultations`

### Domain Configuration

1. In Coolify, set up the domain `www.practicehero.co.uk` for your service.
2. Configure SSL certificates using Let's Encrypt or another provider.
3. Set up appropriate DNS records:
   - A record: `@` → Your server IP
   - A record: `www` → Your server IP

### Manual Deployment

If you want to deploy manually:

```bash
# Build the Docker image
docker build -t practice-hero .

# Run the container with environment variables
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_APP_URL=https://www.practicehero.co.uk \
  -e NEXT_PUBLIC_DOMAIN=practicehero.co.uk \
  practice-hero
```

### Using Docker Compose

```bash
# Start the application
docker-compose up -d

# Stop the application
docker-compose down
```
