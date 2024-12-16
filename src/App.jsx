import { BrowserRouter, Routes, Route} from 'react-router'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Layout from './components/Layout'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
      </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App