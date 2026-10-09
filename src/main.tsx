import { StrictMode, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Home } from './pages/Home.tsx'
import { PrivacyPolicy } from './pages/PrivacyPolicy.tsx'
import { Support } from './pages/Support.tsx'
import type { PageId } from './site.ts'

const pages: Record<PageId, ComponentType> = {
  home: Home,
  privacy: PrivacyPolicy,
  support: Support,
}

// Each HTML entry names its page: <div id="root" data-page="privacy">.
const root = document.getElementById('root')!
const Page = pages[root.dataset.page as PageId] ?? Home

createRoot(root).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
