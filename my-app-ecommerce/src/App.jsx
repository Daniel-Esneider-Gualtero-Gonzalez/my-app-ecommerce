import { BrowserRouter, Routes, Route } from 'react-router-dom'

// RUTES 
import PublicRutes from './rutes/PublicRutes.jsx'
import PrivateRutes from './rutes/PrivateRutes.jsx'

// CONTEXT
import { ContextUserProvider } from './contexts/contextAuth.jsx'

// IMPORTACIONES DE CONTAINERS
import Home from './containers/Home'
import AboutAs from './containers/AboutAs.jsx'
import Login from './containers/Login'
import Recharge from './containers/Recharge.jsx'
import Register from './containers/Register'
import Profile from './containers/Profile.jsx'
import NotFoundPage from './components/Errors/NotFoundPage.jsx'
// FIN DE IMPORTACIONES DE CONTAINERS


// IMPORTACIONES DE COMPONENTES PARA OBSERVAR
import SideBarUserProfile from './components/SideBarUserProfile.jsx'
import LateralMenu from './components/LateralMenu'
import Header from './components/Header'

import SeccionHome from './components/SeccionHome'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'


// FIN DE IMPORTACIONES DE COMPONENTES PARA OBSERVAR

function App() {


  return (
    <>
      <BrowserRouter>
        <ContextUserProvider>
          <NavBar />
          <Routes>
            {/* NO LE PONEMOS RUTA EN ESPECIFICO ESTARA ACCESIBLE A TODOS */}
            <Route >
        
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/singup' element={<Register />} /> 
              <Route path='/aboutas' element={<AboutAs />} />
            
            </Route>
            


            <Route element={<PrivateRutes />}>
              <Route path='/privateroute' element={"Esta es una ruta privada solo si hay usuario"} />
              <Route path='/userprofile' element={<Profile />} />
              <Route path='user/recharge/' element={<Recharge />} />

            </Route>


            <Route path='/lateralmenu' element={<LateralMenu />} />
            <Route path='/header' element={<Header />} />
            <Route path='/seccionhome' element={<SeccionHome />} />
            <Route path='/sidebaruser' element={<SideBarUserProfile />} />
            <Route path='/navbar' element={<NavBar />} />



            <Route path="*" element={<NotFoundPage />} />





          </Routes>


        </ContextUserProvider>

        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App
