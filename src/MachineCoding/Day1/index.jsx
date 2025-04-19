import { useReducer } from "react";
import './index.css';


const count = 0 ;

const reducer = (state , action) => {
    switch(action.type){
        case "increment" : 
            return state+1;

        case "decrement" :  
            return state == 0 ? state : state-1;

        case "reset":
            return 0 ;

        default :
            return state;
    }
}

const Counter = () =>{

    const [state , dispatch ] = useReducer(reducer , count);

    return (
        <div className="counter">
            Counter : {state}
            <div>
                <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
                <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
                <button disabled={state==0} onClick={()=>dispatch({type:'reset'})}>Reset</button>
            </div>

        </div>
    )
}

export default Counter