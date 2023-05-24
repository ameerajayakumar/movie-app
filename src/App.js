import Discover from './pages/discover';
import { Routes, Route } from 'react-router-dom';
import Topnav from './pages/global/Topnav';
import Sidenav from './pages/global/Sidenav';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import ExpandCard from './components/ExpandCard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Sidenav />
        <main className="content">
          <Topnav />
          <ExpandCard />
          <Routes>
            <Route path="/" element={<Discover />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
