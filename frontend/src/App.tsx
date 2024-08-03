import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Construction from './pages/Construction';
import TravelPackages from './pages/TravelPackages';
import { ThemeProvider } from './components/themeProvider';


function App() {

  return (
    <>
      <Router>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/travelPackages" element={<TravelPackages />}/>
              <Route path="/analytics" element={<Construction />}/>
          </Routes>
        </div>
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
