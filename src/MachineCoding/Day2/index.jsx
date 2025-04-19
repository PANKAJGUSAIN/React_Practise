import { useEffect, useReducer, useRef, useState } from 'react';
import './index.css';

const initialState = {
    "Todos" : [{id:1 , status:'Active' , content:"Hello"} , {id:2 , status:'Submitted' , content:"testme"}],
    "statusOptions":["Active" , "Submitted"],
    "filter":"All"
}

const reducer = (state , action) =>{
    console.log(action);
    switch(action.type){
        case "All" : 
            return state
        case "changeStatus":
            return {...state, "Todos":state.Todos.map(item =>{
                if(item.id == action.payload.id){
                    return {
                        ...item ,
                        "status":action.payload.status
                    }
                }else{
                    return item
                }
            })}
        case "deleteTodo":
            return  {...state , "Todos":state.Todos.filter(item => item.id !== action.payload.id)}
        case "AddTodo":
            return  {...state , "Todos":[...state.Todos , {id:state.Todos.length+1 , ...action.payload}]}
        case "changeFilter":
                return {
                  ...state,
                  filter: action.payload
                };
        default:
            return state
    }
}

const TodoApp = () => {
    const [state , dispatch] = useReducer(reducer , initialState);
    const  inputtext = useRef(null);
    const filterOptions = ["All" , "Submitted" , "Active"];



    const handlStatusChange=(item , status)=>{
        console.log("value" , status);
        dispatch({type:"changeStatus" , payload:{
            id:item.id,
            status
        }})
    }

    const handleDeleteItem = (item)=>{
        dispatch({type:"deleteTodo" , payload:{
            id:item.id,
        }})
    }

    const AddTodo = ()=>{
        console.log(inputtext.current.value);
        let count = 0 ;
        setInterval(()=>{
            count +=1
            inputtext.current.value = count;
        },100)
        
        setTimeout(() => {
            dispatch({type:"AddTodo" , payload:{
                status:"Active",
                "content":inputtext.current.value
            }})
        }, 2000);

    }

    return (
        <div className="todoWrapper">
            <h1>Todo</h1>
            <div className="todoButtonWrapper">
                <input type="text" ref={inputtext} />
                <button onClick={()=>AddTodo()}>Add Todo</button>
            </div>
            <div>
                <span>FilterBy</span>
                <select value={state.filter} onChange={(e) => dispatch({ type: "changeFilter", payload: e.target.value })}>
                    {
                        filterOptions
                        .map((val , index)=>{
                            return (
                                <option key={index} value={val}>{val}</option>
                            )
                        })
                    }
                </select>

            </div>
            <div className='todoListWrapper'>
                {
                    state.Todos
                    .filter(item => state.filter === "All" || item.status === state.filter)
                    .map((item , index) =>{
                        return (
                            <div key={index} className='todoItem'>
                                <select value={item.status} onChange={(e)=>handlStatusChange(item , e.target.value)}>
                                    {
                                        state
                                        .statusOptions
                                        .map((status , statusid)=>{
                                            return <option key={statusid} value={status}>{status}</option>
                                        })
                                    }
                                </select>
                                <span>{item.status}</span>
                                <span>{item.content}</span>
                                <button onClick={()=>handleDeleteItem(item)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default TodoApp