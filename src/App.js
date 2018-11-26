import React, {Component, Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {GlobalStyle} from './style'
import {IconStyle} from './static/iconfont/iconfont'
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <GlobalStyle/>
                    <IconStyle/>
                    <BrowserRouter>
                        <Fragment>
                            <Header/>
                            {/*exact表示路径必须完全相等才能匹配*/}
                            {/*<Route path="/" exact render={() => (<div>home</div>)}/>  */}
                            <Route path="/" exact component={Home}/>
                            <Route path="/detail/:id" exact component={Detail}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/write" exact component={Write}/>
                        </Fragment>
                    </BrowserRouter>
                </Fragment>
            </Provider>
        )
    }
}

export default App