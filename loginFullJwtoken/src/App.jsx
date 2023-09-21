import {BrowserRouter,Routes,Route}  from 'react-router-dom'

// IMPORTACIONES DE CONTAINERS
import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'
// FIN DE IMPORTACIONES DE CONTAINERS


// IMPORTACIONES DE COMPONENTES PARA OBSERVAR
import LateralMenu from './components/LateralMenu'
import Header from './components/Header'
import InputSearch from './components/InputSearch'
import SeccionHome from './components/SeccionHome'

// FIN DE IMPORTACIONES DE COMPONENTES PARA OBSERVAR

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/login'  element={<Login />}/>
     <Route path='/singup' element={<Register />} /> 
     <Route path='/lateralmenu' element = {<LateralMenu />} />
     <Route path='/header' element={<Header />} />
     <Route path='/inputsearch' element={<InputSearch />} />
     <Route path='/seccionhome' element={<SeccionHome />} />
    


    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
