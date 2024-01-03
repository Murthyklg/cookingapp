import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Recipe from './pages/Recipe/Recipe'
import Search from './pages/Search/Search'
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Create' element={<Create/>}/>
      <Route path='/recipes/:id' element={<Recipe/>}/>
      <Route path='/Search' element={<Search/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );  
}

export default App;
