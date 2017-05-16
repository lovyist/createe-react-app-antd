/**
 * Created by Freeman on 2017/3/25.
 */
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import userUtils  from './utils/userUtils'
import App from './containers/App'
import Index from './components/views/index'
import Login from './components/views/user/login'
import Register from './components/views/user/register'
import Forget from './components/views/user/forget'
import NotFound from './components/commons/404'
import Mine from './components/views/mine'
import Settings from './components/views/mine/Settings'
import Publish from './components/views/publish'
import RecruitPublish from './components/views/recruit/publish'
import Map from './components/Map'
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} onEnter={userUtils.redirectToLogin}/>
    <Route path="login" component={Login} onEnter={userUtils.redirectToBack}/>
    <Route path="register" component={Register} onEnter={userUtils.redirectToBack}/>
    <Route path="forget" component={Forget} onEnter={userUtils.redirectToBack}/>
    <Route path="publish" component={Publish} onEnter={userUtils.redirectToLogin}/>
    <Route path="mine" component={Mine} onEnter={userUtils.redirectToLogin}/>
    <Route path="mine/settings" component={Settings}/>
    <Route path="recruit/publish" component={RecruitPublish}/>
    <Route path="map" component={Map}/>
    <Route path="*" component={NotFound}/>
  </Route>
)
