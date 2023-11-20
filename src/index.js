import  React from 'react';
import  ReactDOM from 'react-dom/client';
import  { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import  { Provider } from 'react-redux'
import  createSagaMiddleware from '@redux-saga/core'
import  { all } from 'redux-saga/effects'
import  jokeReducer from './reducers/joke'
import  usersReducer from './reducers/users'
import  { watchForJoke } from './sagas/joke'
import  { watchForUsers } from './sagas/users'
// import  './index.css';
import  App from './App';
//import  reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers(
  { joke: jokeReducer,
    users: usersReducer 
  })
const store = createStore(
  rootReducer,
  compose( 
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

function* rootSagas() {
  yield all(
    [
      watchForJoke(),
      watchForUsers(),
    ]
  )
}
sagaMiddleware.run(rootSagas)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// const newfunc = () => ({ a: 1, b: 2 })

// const obj = newfunc()

// reportWebVitals(console.log);
// console.log(obj)
