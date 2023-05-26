import Sidenav from './pages/global/Sidenav';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import Main from './pages/global/Main';
import useMediaQueries from './hooks/useMediaQueries';

function App() {
  const isMobile = useMediaQueries('mobile');
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        {!isMobile && (
          <>
            <Sidenav />
            <Main />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
