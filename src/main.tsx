import './global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Users } from './Users'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>,
)
