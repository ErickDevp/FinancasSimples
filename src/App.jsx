import  {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './features/auth/Login.jsx'
import Register from './features/auth/Register.jsx'
import Redefinir from './features/auth/Redefinir.jsx'
import LandingPage from './features/landingPage/LandingPage.jsx'
import Home from './pages/HomePage.jsx'
import Criptomoedas from './pages/CriptoPage.jsx'
import Acoes from './pages/AcoesPage.jsx'
import Fiis from './pages/FiisPage.jsx'
import Dolar from './pages/DolarPage.jsx'

import useAuthSession from './hooks/useAuthSession.js'
import LoadingSpinner from './components/common/LoadingSpinner.jsx'

export default function App() {
  const { user, showLoading } = useAuthSession();

  return (
    <>
      {showLoading && <LoadingSpinner/>}
      {
        !showLoading &&
          <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} exact/>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/home"/>}/>
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/home"/>}/>
            <Route path="/redefenir-senha" element={<Redefinir />}/>
            <Route path="/home" element={user ? <Home /> : <Navigate to="/login"/>} />
            <Route path="/investimento-criptomoedas" element={user ? <Criptomoedas /> : <Navigate to="/login"/>} />
            <Route path="/investimento-acoes" element={user ? <Acoes /> : <Navigate to="/login"/>} />
            <Route path="/investimento-fundos-imobiliarios" element={user ? <Fiis /> : <Navigate to="/login"/>} />
            <Route path="/investimento-dolar" element={user ? <Dolar /> : <Navigate to="/login"/>} />
          </Routes>
        </Router>
      }
    </>
  ) 
}