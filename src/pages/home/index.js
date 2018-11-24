import React, {Component} from 'react'
import {connect} from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {getHomeActon, getShowArrowAction} from './store/actionCreators'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends Component {
    componentDidMount() {
        this.props.initHome()
        this.props.bindScrollEvent()
    }

    componentWillUnmount() {
        this.props.removeScrollEvent()
    }

    // 个人认为这种没有改变store数据的函数没有必要写到mapDispatchToProps中
    scrollToTop() {
        window.scrollTo(0, 0)
    }

    render() {
        const {showArrow} = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        src="//upload.jianshu.io/admin_banners/web_images/4552/532152a690ad5a98d1c22eb48a316ca7ff428970.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    showArrow && <BackTop onClick={this.scrollToTop}>顶部</BackTop>
                }
            </HomeWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    showArrow: state.getIn(['home', 'showArrow'])
})

const mapDispatchToProps = (dispatch) => {
    return {
        initHome() {
            dispatch(getHomeActon())

        },
        bindScrollEvent() {
            window.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 400) {
                    dispatch(getShowArrowAction(true))
                } else {
                    dispatch(getShowArrowAction(false))
                }
            })
        },
        removeScrollEvent() {
            window.removeEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 400) {
                    dispatch(getShowArrowAction(true))
                } else {
                    dispatch(getShowArrowAction(false))
                }
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)