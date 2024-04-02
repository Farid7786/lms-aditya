import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Campuslife from './pages/Campuslife'
import Contact from './pages/Contact'
import Departments from './pages/Departments'
import About from './pages/About'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signOut" element={<SignOut />} />
      <Route path="/campuslife" element={<Campuslife />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About/>} />
      <Route path="/department" element={<Departments />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
