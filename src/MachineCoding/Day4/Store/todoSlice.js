import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items :[
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
      ]
}

const todoSlice = createSlice({
    name:"TodoSlice",
    initialState,
    reducers:{
        "reOrder":(state, action) => {
            // Action payload should contain the new order or swap indices
            const { fromIndex, toIndex } = action.payload;
      
            // Reordering logic
            const [movedItem] = state.items.splice(fromIndex, 1); // remove the item
            state.items.splice(toIndex, 0, movedItem); // insert it at the new position
          }
    }
})

export const {reOrder} = todoSlice.actions;
export default todoSlice.reducer;