import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import FastClick from 'fastclick';
//local
import store from './store'
import routes from './routes'
//css liberiry

import 'weui';
import 'react-weui/lib/react-weui.min.css';
//local css
import './assets/css/reset.css'
import './assets/css/index.css'
import './assets/css/login.css'
import './assets/css/register.css'
import './assets/css/personal-center.css'
import './assets/css/publish.css'


const history = syncHistoryWithStore(browserHistory, store)
window.addEventListener('load', () => {
  FastClick.attach(document.body);
});

render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)
