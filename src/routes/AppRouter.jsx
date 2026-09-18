import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Housing from '../pages/Housing';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';

function AppRouter() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Housing />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter
