import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {
  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
