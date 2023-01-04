import { Box, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux';
const BtnTheme = lazy(() => import('./components/BtnTheme'));
const NavBar = lazy(() => import('./components/NavBar'));
import './App.css'
import Card from './components/Card';

function App() {

  const themeState = useSelector(state => state.theme.color);
  const theme = createTheme({
    palette: {
      mode: themeState,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        bgcolor='background.default'
        height='100px'
        width='100%'
      >
        <Suspense fallback={<h1>Loading...</h1>}><NavBar /></Suspense>
        <Suspense fallback={<h1>Loading...</h1>}><BtnTheme /></Suspense>
      </Box>
      <Card/>
    </ThemeProvider>
  )
}

export default App
