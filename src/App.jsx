import React from 'react'
import RouterConfig from '../src/RouterConfig'
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  const isAuthenticated=true;
  return (
    
    <Router>
      <RouterConfig isAuthenticated={isAuthenticated}></RouterConfig>
    </Router>
  )
}

export default App