import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension' //ф-ция для проверки внутри браузера

import createRootReducer from './reducers'
import { Provider } from 'react-redux'
import routes from './routes' 


const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares)) //применение всех наших middleware по очереди
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
