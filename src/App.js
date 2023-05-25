import Sidenav from './pages/global/Sidenav';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import Main from './pages/global/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Sidenav />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
