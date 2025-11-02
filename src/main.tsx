import { render } from 'preact'
import './index.css'
import { Toaster } from 'sonner'
import { App } from './app.tsx'

render(
  <>
    <Toaster position="top-right" />
    <App />
  </>,
  document.getElementById('app')!
)
