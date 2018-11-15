import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
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
    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }
    handleFocus(){
        this.setState({
            focused:true
        })
    }
    handleBlur(){
        this.setState({
            focused:false
        })
    }

    render() {
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
                        in={this.state.focused}
                        timeout={300}
                        classNames="slide"
                        appear={true}
                    >
                        <NavSearchWrapper className={this.state.focused ? 'focused' : ''}>
                            <NavSearch onFocus={this.handleFocus} onBlur={this.handleBlur}/>
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

export default Header