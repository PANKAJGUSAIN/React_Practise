import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import './index.css';
import { useTheme } from './themeContext';

const Counter = lazy(()=> import('./MachineCoding/Day1/index'));
const TodoApp = lazy(()=> import('./MachineCoding/Day2/index'));
const ShoppingCart = lazy(()=> import('./MachineCoding/Day3/index'));
const DragAndDrop = lazy(()=>import('./MachineCoding/Day4/index'));

// const component = {
//     Counter : lazy(() => import('./MachineCoding/Day1/index')),
// }


const App = () => {
    const {theme} = useTheme();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div style={{height:"100%" , width:"100%"}}>
                <h1>{theme}</h1>
                {/* // dynamic render */}
                {/* <component.Counter /> */}
                <nav className='Navbar'>
                    <Link to="/MachineCode1">Counter</Link>
                    <Link to="/MachineCode2">Todo App</Link>
                    <Link to="/MachineCode3">Shopping Cart</Link>
                    <Link to="/MachineCode4">Drag And Drop:Reorder</Link>
                </nav>
                <Routes>
                    <Route path="/MachineCode1" element={<Counter/>}/>
                    <Route path="/MachineCode2" element={<TodoApp/>}/>
                    <Route path="/MachineCode3" element={<ShoppingCart/>}/>
                    <Route path="/MachineCode4" element={<DragAndDrop/>} />
                    
                </Routes>
            </div>
        </Suspense>
    );
}

export default App;