import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getLoginAction} from './store/actionCreators'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Login extends Component {

    render() {
        const {isLogin, handleLogin} = this.props
        return <Fragment>
            {
                isLogin ? <Redirect to="/"/> :
                    <LoginWrapper>
                        <LoginBox>
                            {/*styleComponent中用innerRef代替ref*/}
                            <Input placeholder="账号" ref={(input) => {
                                this.account = input
                            }}/>
                            <Input placeholder="密码" type="password" ref={(input) => {
                                this.password = input
                            }}/>
                            <Button onClick={() => {
                                handleLogin(this.account.value, this.password.value)
                            }}>登录</Button>
                        </LoginBox>
                    </LoginWrapper>
            }
        </Fragment>
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.getIn(['login', 'isLogin']),
})

const mapDispatchToProps = (dispatch) => ({
    handleLogin(account, password) {
        dispatch(getLoginAction(account, password))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)