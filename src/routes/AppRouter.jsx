import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Housing from '../pages/Housing';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

function AppRouter() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Housing />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/erreur" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter
