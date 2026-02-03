import './css/App.css'
import MovieCard from './components/Movie'
import Home from './pages/Home.jsx'
import {Routes,Route} from "react-router-dom"
import Favorite from './pages/Favorite.jsx'
import Navigation from './components/Navigation.jsx'

function App() {

  return (
    <div>
      <Navigation/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
