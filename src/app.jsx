import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Day1 = lazy(() => import('./Day1/Day1'));
const Day2 = lazy(() => import('./Day2/Day2'));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/day1">Day 1</Link></li>
                        <li><Link to="/day2">Day 2</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/day1" element={<Day1 />} />
                    <Route path="/day2" element={<Day2 />} />
                </Routes>
            </div>
        </Suspense>
    );
}

export default App;