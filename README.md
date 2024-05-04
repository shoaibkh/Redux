# Redux
This is only for the practice purpose to learn more about redux 

import createStore which is a function from redux module to create a store object \
```import { createStore } from 'redux' ```

create a store object which accepts reducer function \
```const store = createStore(reducer)``` 

/**
 * The reducer function that will be passed to the store during its
 * creation. The reducer function will be called every time an action
 * is dispatched to the store. It will receive the current state and the
 * action as arguments, and will be expected to return the new state.
 *
 * @param {Object} state The current state of the application. If this is
 * the first time the reducer is being called, the state will be set to
 * the initial state, which is {count: 0}.
 * @param {Object} action The action that was dispatched to the store.
 *
 * @return {Object} The updated state of the application. \

```function reducer(state = { count: 0 }, action)``` 

```{
    /**
     * The switch statement will inspect the type property of the action
     * and will execute the corresponding block of code. If no block is
     * found, it will execute the default block.
     */
    switch (action.type) {
        /**
         * If the action has a type of 'INCREMENT', then increment the
         * count property of the state by 1.
         */
        case 'INCREMENT':
            return {count: state.count + 1}
        /**
         * If the action has a type of 'DECREMENT', then decrement the
         * count property of the state by 1.
         */
        case 'DECREMENT':
            return {count: state.count - 1}
        /**
         * If the action has a type that we do not know about, then just
         * return the current state without making any changes.
         */
        default:
            return state
    }
}

// Dispatches an action. It is the only way to trigger a state change.
store.dispatch({type: 'INCREMENT'}) 
store.dispatch({type: 'INCREMENT'}) 
store.dispatch({type: 'DECREMENT'}) 

// Subscribe to the store. It will be called every time the state changes.
store.subscribe(() => console.log(store.getState()))

//output
//{count: 1}
//{count: 2}
//{count: 1}
