import React, { Suspense } from 'react';
import { MoviesContextProvider } from './context/MoviesContext'

import MoviePreview from './pages/MoviePreview';
import {Routes,Route} from 'react-router-dom';
import SelectSeat from './pages/SelectSeat';
import { AuthContextProvider } from './context/AuthContext';
import { Loading } from './context/components/Loading';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {



  return (
  <AuthContextProvider>
    <MoviesContextProvider>
 
    <Routes>

      <Route path='/' element={
        <Suspense fallback={<Loading/>}>
          <Dashboard/>
        </Suspense>
      }/>
      <Route path='/movie-preview' element={<MoviePreview/>}/>
      <Route path='/select-seat' element={<SelectSeat/>}/>
    </Routes>

  </MoviesContextProvider>
  </AuthContextProvider>
  )
}

export default App
