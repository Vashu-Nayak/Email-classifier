import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="954988742469-f9h47t4fgipmvjo7qt7cv7dtdaddvcfl.apps.googleusercontent.com" scope="https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
