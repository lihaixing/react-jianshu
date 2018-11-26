import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {
    getHandleFocusAtion,
    getHandleBlurAtion,
    getListActon,
    getHotSwitchAction,
    getMouseEnterAction,
    getMouseOverAction
} from './store/actionCreators'
// 注意这里要改变的事login中的数据，方法应该写到login目录中
import {getLoginoutAction} from '../../pages/login/store/actionCreators'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo
} from './style'

class Header extends Component {
    componentDidMount() {
        this.props.initList()
    }

    render() {
        const {
            focused,
            mouseEnter,
            list,
            index,
            handleFocus,
            handleBlur,
            hotSwitch,
            handleMouseEnter,
            handleMouseOver,
            isLogin,
            handleLoginout
        } = this.props
        const firstIndex = (index - 1) * 10
        const currentList = list.slice(firstIndex, firstIndex + 10)
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    {
                        isLogin ?
                            <NavItem onClick={handleLoginout} className="right">退出</NavItem> :
                            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }

                    <CSSTransition
                        in={focused}
                        timeout={300}
                        classNames="slide"
                        appear={true}
                    >
                        <NavSearchWrapper className={focused ? 'focused' : ''}>
                            <NavSearch onFocus={handleFocus} onBlur={handleBlur}/>
                            <i className="iconfont Aa">&#xe614;</i>
                            {(focused || mouseEnter) &&
                            <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOver}>
                                <div className="title">热门搜索</div>
                                <button onClick={() => hotSwitch(this.spin)}>换一换</button>
                                <i ref={(spin) => {
                                    this.spin = spin
                                }} style={{transform: 'rotate(0deg)'}} className="iconfont spin">&#xe851;</i>
                                <ul className="searchList">
                                    {
                                        currentList.map((item, index) => {
                                            return <li key={index}>{item}</li>
                                        })
                                    }
                                </ul>
                            </SearchInfo>
                            }
                        </NavSearchWrapper>
                    </CSSTransition>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writing">
                            <i className="iconfont">&#xe60e;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

// 连接方式 将store数据挂在props中
const mapStateToProps = (state) => ({ // state是经过合并的，所以有一层header
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    index: state.getIn(['header', 'index']),
    mouseEnter: state.getIn(['header', 'mouseEnter']),
    isLogin: state.getIn(['login', 'isLogin'])
})

// 将store.dispatch方法挂在props中
const mapDispatchToProps = (dispatch) => {
    return {
        initList() {
            dispatch(getListActon())
        },
        handleFocus() {
            dispatch(getHandleFocusAtion())
        },
        handleBlur() {
            dispatch(getHandleBlurAtion())
        },
        hotSwitch(spin) {
            const prevDeg = spin.style.transform.replace(/\D/g, '');
            spin.style.transform = 'rotate(' + (prevDeg * 1 + 360) + 'deg)'
            dispatch(getHotSwitchAction())
        },
        handleMouseEnter() {
            dispatch(getMouseEnterAction())
        },
        handleMouseOver() {
            dispatch(getMouseOverAction())
        },
        handleLoginout() {
            dispatch(getLoginoutAction())
        }
    }
}
// connect执行后返回的结果是容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Header)