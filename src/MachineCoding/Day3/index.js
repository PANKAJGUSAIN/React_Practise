import { useEffect, useReducer, useState } from "react"
import './index.css';

const initialState = {
    cart: []
}

const reducer = (state, action) => {
    console.log(action.payload)
    switch (action.type) {
        case "ADDTOCART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "DELETETOCART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        default:
            return { ...state }
    }
}

const ShoppingCart = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        const method = 'GET'
        const headers = {
            'content-type': 'application/text'
        }

        try {
            fetch('https://fakestoreapi.com/products', {
                method: method
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('error Occured')
                    } else {
                        return response.json();
                    }
                }).then(res => {
                    console.log(res);
                    setData(res);
                    setLoading(false);
                })
        } catch (err) {
            console.log('errror Occured', err);
            setLoading(false);
        }

    }, [])

    const addtoCart = useCallback((item) => {
        dispatch({ type: "ADDTOCART", payload: item });
      }, []);
      
      const deletetoCart = useCallback((item) => {
        dispatch({ type: "DELETETOCART", payload: item.id });
      }, []);

    return (
        <>
            {
                loading ?
                    <>Loading...</> :
                    <div className="ShoppingCartWrapper">
                        <div className="ShoppingItemsWrapper">
                            {
                                data.map(item => {
                                    return (<div key={item.id} className="ShoppingItem">
                                        <img  src={item.image} height="20px" width="20px" />
                                        <div>
                                            <span>{item.title}</span>
                                        </div>
                                        <button onClick={() => { addtoCart(item) }}>Add to cart</button>
                                    </div>)
                                })
                            }
                        </div>
                        <div className="ShoppingCart">
                            {
                                state.cart.map(item => {
                                    return (
                                        <div key={item.id} className="ShoppingItem">
                                            <img  src={item.image} height="20px" width="20px" />
                                            <div>
                                                <span>{item.title}</span>
                                            </div>
                                            <button onClick={() => { deletetoCart(item) }}>Remove</button>
                                        </div>
                                    )
                                })
                            }
                            <div>
                                Total:
                            </div>
                            <div>
                                <button disabled={state.cart.length == 0} onClick={() => {alert('purchase') }}>Purchase</button>
                            </div>
                        </div>

                    </div>
            }

        </>
    )
}

export default ShoppingCart