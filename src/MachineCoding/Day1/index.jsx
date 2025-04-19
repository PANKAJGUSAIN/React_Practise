import { useEffect, useReducer, useRef } from "react";
import './index.css';


const count = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;

        case "decrement":
            return state == 0 ? state : state - 1;

        case "reset":
            return 0;

        default:
            return state;
    }
}

const Counter = () => {

    const testref = useRef(null);
    const timer  = useRef(null);
    const [state, dispatch] = useReducer(reducer, count);

    useEffect(() => {
        
        let count = 0;
        if (testref.current) {
            timer.current = setInterval(() => {
                count += 1

                testref.current.textContent = count;
            }, 100)
        }

        return () => {
            clearInterval(timer.current)
        }
    }, [])

    const closetime = ()=>{
        clearInterval(timer.current);
    }
    const handlekeyDown = (e)=>{
        // isTrusted 
        console.log(e.key);
        if(e.key == "enter"){
            dispatch({type:"increment"})
        }
    }

    return (
        <div className="counter">
            <div ref={testref}>0</div><button onClick={closetime}>Close</button>
            <div className="counter_value">
                <span>Counter : {state}</span>
            </div>
            <div className="counter_buttons">
                <button 
                    onClick={() => dispatch({ type: 'increment' })} 
                    onKeyDown={(e)=> handlekeyDown(e)}
                >
                    Increment
                </button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
                <button disabled={state == 0} onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>

        </div>
    )
}

export default Counter