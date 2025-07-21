import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/providers/ThemeProvider'
import { LanguageProvider } from './contexts/LanguageContext'
import HomePage from './pages/HomePage'
import SiriLights from './components/ui/SiriLights'
import BackgroundFX from './components/ui/BackgroundFX';
import HackerRain from './components/ui/HackerRain';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <BackgroundFX />
          {/* <HackerRain /> */}
          <SiriLights />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App 