import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@radix-ui/themes/styles.css';
import ChatbotModal from './Components/chatbot-modal.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <ChatbotModal/>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
)
