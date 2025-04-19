import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './index.css';

const MachineDay1 = lazy(()=> import('./MachineCoding/Day1/index'));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='Navbar'>
                <nav>
                    <Link to="/MachineCode1">Machine Code 1</Link>
                </nav>
                <Routes>
                    <Route path="/MachineCode1" element={<MachineDay1/>}/>
                </Routes>
            </div>
        </Suspense>
    );
}

export default App;