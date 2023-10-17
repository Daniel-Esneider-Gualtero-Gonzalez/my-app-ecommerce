import {BrowserRouter,Routes,Route}  from 'react-router-dom'

// CONTEXT
import { ContextUserProvider } from './contexts/contextAuth.jsx'

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
    <ContextUserProvider>
    <Routes>

      
      
     <Route path='/home' element={<Home />} />
     <Route path='/login'  element={<Login />}/>
     <Route path='/singup' element={<Register />} /> 
     <Route path='/lateralmenu' element = {<LateralMenu />} />
     <Route path='/header' element={<Header />} />
     <Route path='/inputsearch' element={<InputSearch />} />
     <Route path='/seccionhome' element={<SeccionHome />} />

     <Route path="*" element={"NOT FOUNT NO SE ENCONTRO ESTA RUTA"}/>


    


    </Routes>

    </ContextUserProvider>

    </BrowserRouter>
     
    </>
  )
}

export default App
