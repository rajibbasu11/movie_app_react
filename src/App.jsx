import './App.css'
import Header from './components/Header'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </MovieProvider>
  )
}

export default App
