import './App.css';
import Home from "./pages/Home/Home.jsx"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
