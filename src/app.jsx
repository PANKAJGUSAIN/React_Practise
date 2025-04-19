import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './index.css';

const Counter = lazy(()=> import('./MachineCoding/Day1/index'));
const TodoApp = lazy(()=> import('./MachineCoding/Day2/index'));


const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <nav className='Navbar'>
                    <Link to="/MachineCode1">Counter</Link>
                    <Link to="/MachineCode2">Todo App</Link>
                </nav>
                <Routes>
                    <Route path="/MachineCode1" element={<Counter/>}/>
                    <Route path="/MachineCode2" element={<TodoApp/>}/>
                </Routes>
            </div>
        </Suspense>
    );
}

export default App;