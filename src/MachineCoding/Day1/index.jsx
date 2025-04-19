import { useReducer } from "react";
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

    const [state, dispatch] = useReducer(reducer, count);

    const handlekeyDown = (e)=>{
        // isTrusted 
        console.log(e.key);
        if(e.key == "enter"){
            dispatch({type:"increment"})
        }
    }

    return (
        <div className="counter">
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