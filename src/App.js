import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Signup } from './pages'
import { Login } from './pages/Login'
import { ThemeProvider } from './providers/theme'

function App() {
    return (
        <div>
            <ThemeProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    )
}

export default App
