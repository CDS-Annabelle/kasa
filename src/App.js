import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import styles from './App.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Accommodations from './pages/Accommodations/Accommodations'

function App() {
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/accommodations/:id"
                        element={<Accommodations />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
