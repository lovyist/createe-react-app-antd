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
import Profile from './components/views/mine/profile'
import Collection from './components/views/mine/Collection'
import Published from './components/views/mine/Published'
import Settings from './components/views/mine/Settings'
import Publish from './components/views/publish'
import RecruitPublish from './components/views/recruit/publish'
import RecruitDetail from './components/views/recruit/Detail'
import TravelDetail from './components/views/travel/Detail'
import TravelPublish from './components/views/travel/publish'
import EduDetail from './components/views/edu/Detail'
import EduPublish from './components/views/edu/publish'
import Cat from './components/views/cat'
import CatList from './components/views/cat/CatList'
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} onEnter={userUtils.redirectToLogin}/>
    <Route path="login" component={Login} onEnter={userUtils.redirectToBack}/>
    <Route path="register" component={Register} onEnter={userUtils.redirectToBack}/>
    <Route path="forget" component={Forget} />
    <Route path="publish" component={Publish} onEnter={userUtils.redirectToLogin}/>
    <Route path="mine" component={Mine} onEnter={userUtils.redirectToLogin}/>
    <Route path="mine/profile" component={Profile}/>
    <Route path="mine/collection" component={Collection}/>
    <Route path="mine/published" component={Published}/>
    <Route path="mine/settings" component={Settings}/>
    <Route path="cat/:type" component={Cat}/>
    <Route path="cat/:type/:catId" component={CatList}/>
    <Route path="recruit/publish" component={RecruitPublish}/>
    <Route path="recruit/detail/:id" component={RecruitDetail}/>
    <Route path="travel/detail/:id" component={TravelDetail}/>
    <Route path="travel/publish" component={TravelPublish}/>
    <Route path="edu/detail/:id" component={EduDetail}/>
    <Route path="edu/publish" component={EduPublish}/>
    <Route path="*" component={NotFound}/>
  </Route>
)
