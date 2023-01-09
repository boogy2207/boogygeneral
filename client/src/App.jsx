import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./components/Home'));
const Form = lazy(() => import('./components/Form'));
const Details = lazy(() => import('./components/Detail'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
      <Route path='/book/:id' element={<Suspense fallback={<div>Loading...</div>}><Details /></Suspense>} />
      <Route path='/upload-book' element={<Suspense fallback={<div>Loading...</div>}><Form /></Suspense>} />
    </Routes>
  );
};


export default App
