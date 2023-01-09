import { Box, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
const BtnTheme = lazy(() => import('./components/BtnTheme'));
const NavBar = lazy(() => import('./components/NavBar'));
import './App.css'
import Card from './components/Card';
import Detail from './components/Detail';
import Home from './components/Home/Home';

function App() {

  const themeState = useSelector(state => state.theme.color);
  const theme = createTheme({
    palette: {
      mode: themeState,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>

          <Route path={'/book/:id'} component={Detail} />

          <Route path={'/'} component={Home}>
            
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}


export default App
