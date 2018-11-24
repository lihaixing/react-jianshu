import React, {Component, Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {GlobalStyle} from './style'
import {IconStyle} from './static/iconfont/iconfont'
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'

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
                            <Route path="/detail" exact component={Detail}/>
                        </Fragment>
                    </BrowserRouter>
                </Fragment>
            </Provider>
        )
    }
}

export default App