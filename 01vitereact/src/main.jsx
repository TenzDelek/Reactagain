import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const Element= React.createElement('a',{
  href:"https://google.com",target:'_blank'
},"click me to go to google")

ReactDOM.createRoot(document.getElementById('root')).render(
  //Element //to use this we have to delete the stictmode below
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
