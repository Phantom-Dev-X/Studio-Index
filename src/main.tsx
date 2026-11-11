import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initAdaptivePerformance } from './utils/adaptivePerformance.ts'

initAdaptivePerformance()

createRoot(document.getElementById('root')!).render(
  <App />
)
