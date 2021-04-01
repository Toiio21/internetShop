import React from 'react'
import {Switch, Route} from 'react-router'
import Phone from './screens/phone'
import Phones from './screens/phones'
import Basket from './screens/basket'

export default (
  <Switch>
    <Route path='/' component={Phones} exact />
    <Route path='/categories/:id' component={Phones} exact />
    <Route path='/phones/:id' component={Phone} />
    <Route path='/basket' component={Basket} exact />
  </Switch>
)