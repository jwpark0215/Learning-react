import './css/App.css'
import Home from './pages/Home.jsx'
import {Routes,Route} from "react-router-dom"
import Favorite from './pages/Favorite.jsx'
import Navigation from './components/Navigation.jsx'
import { MovieProvider } from './context/MovieContext.jsx'
  
function App() {

  return (
      <MovieProvider>
        <Navigation/>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favorite' element={<Favorite/>}/>
          </Routes>
        </main>
      </MovieProvider>
    
  )
}

export default App
