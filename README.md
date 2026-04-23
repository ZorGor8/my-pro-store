# PremiumStore — Modern E-commerce Platform

A high-performance, responsive e-commerce application built with a focus on User Experience (UX) and Performance Optimization.

> **🔗 Live Demo:** https://my-pro-store-chi.vercel.app/

## 🌟 Key Features
* **Dynamic Product Catalog:** Real-time fetching from the API with optimized data handling.
* **Local Asset Optimization:** High-quality product images are served locally from `/public/assets` to ensure 100% uptime.
* **Advanced Search with Debouncing:** Optimized search logic that reduces unnecessary re-renders and improves CPU efficiency.
* **Skeleton Loading UI:** Enhanced perceived performance using professional pulsing loaders during data fetching.
* **Persistent Shopping Cart:** State-managed cart using **Zustand Middleware** to keep data updated even after page refreshes.
* **Mobile-First Design:** Fully responsive interface with optimized touch targets and horizontal scrollable navigation.
* **SPA Routing Fix:** Custom Vercel configuration (`vercel.json`) to handle client-side routing and prevent 404 errors.

## 🚀 Tech Stack
* **React 18** — Functional components and Hooks.
* **Vite** — Ultra-fast frontend build tool (optimized for Apple Silicon).
* **Zustand** — Lightweight state management with Persistence middleware.
* **TypeScript** — Ensuring type safety and robust code architecture.
* **Tailwind CSS** — Utility-first styling for modern and responsive UI.
* **Testing** — Vitest for Unit tests and Playwright for E2E testing.

## ✅ Automated Testing & Quality Assurance
The project follows a comprehensive testing strategy to ensure reliability:
* **Unit Testing (Vitest):** Focused on business logic, specifically testing the Zustand store and cart calculations.
* **E2E Testing (Playwright):** End-to-end scenarios covering product discovery, cart management, and navigation integrity.

## 🛠 Installation & Setup

1. **Clone & Install:**
   ```bash
   git clone [https://github.com/ZorGor8/my-pro-store.git](https://github.com/ZorGor8/my-pro-store.git)
   cd my-pro-store
   npm install

2. Setup Playwright:
npx playwright install
3. Running the Project:
npm run dev
4. Running Tests:
Unit Tests: npm run test
E2E Tests: npx playwright test
E2E UI Mode: npx playwright test --headed
