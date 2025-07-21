import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/providers/ThemeProvider'
import { LanguageProvider } from './contexts/LanguageContext'
import HomePage from './pages/HomePage'
import SiriLights from './components/ui/SiriLights'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
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