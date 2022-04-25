import React from 'react'
import '../../assets/css/App.css'
import Dashboard from './Dashboard'
import Sidebar from '../Sidebar'
function App() {
  return (
    <div className="d-flex w-100">
     
      <Sidebar />
      <Dashboard />
      
      
    </div>
  )
}

export default App
