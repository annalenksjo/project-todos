import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import TodoList from './components/TodoList'
import NewItem from 'components/NewItem'
import Header from 'components/Header'

//Connect (combine) all of the slices into one group
const reducer = combineReducers ({
  todos: todos.reducer
})

// Create redux store from connected slices
const store = configureStore ({ reducer })


export const App = () => {
  return (
    // Pass already created redux store into <Provider /> component,
    // so every component inside can reach for it
    < Provider store={store}>
      < Header />
      < NewItem />
      < TodoList />
    </Provider>
  )
}
