import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {getHandleFocusAtion, getHandleBlurAtion} from './store/actionCreators'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'

class Header extends Component {

    render() {
        const {focused, handleFocus, handleBlur} = this.props
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <CSSTransition
                        in={focused}
                        timeout={300}
                        classNames="slide"
                        appear={true}
                    >
                        <NavSearchWrapper className={focused ? 'focused' : ''}>
                            <NavSearch onFocus={handleFocus} onBlur={handleBlur}/>
                            <i className="iconfont">&#xe614;</i>
                        </NavSearchWrapper>
                    </CSSTransition>
                </Nav>
                <Addition>
                    <Button className="writing">
                        <i className="iconfont">&#xe60e;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

// 连接方式 将store数据挂在props中
const mapStateToProps = (state) => ({
    focused: state.header.focused,
})

// 将store.dispatch方法挂在props中
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(getHandleFocusAtion())
        },
        handleBlur() {
            dispatch(getHandleBlurAtion())
        }
    }
}
// connect执行后返回的结果是容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Header)