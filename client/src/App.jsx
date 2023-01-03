import { Suspense, lazy } from 'react'
const BtnTheme = lazy(() => import('./components/BtnTheme'));
const NavBar = lazy(() => import('./components/NavBar'));
import './App.css'

function App() {

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}><NavBar /></Suspense>
      <Suspense fallback={<h1>Loading...</h1>}><BtnTheme /></Suspense>
    </div>
  )
}

export default App
