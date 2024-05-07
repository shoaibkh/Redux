import { configureStore, createSlice } from "@reduxjs/toolkit";
import pkg from 'redux-logger';
const {createLogger} = pkg;

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions
const store = configureStore({ reducer: counterSlice.reducer, middleware: getDefaultMiddleware => getDefaultMiddleware().concat(createLogger()) })

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())