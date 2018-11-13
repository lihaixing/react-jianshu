import React, {Component} from 'react'
import PropTypes from 'prop-types'



class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test: ''
        }
        this.handleClick = this.handleClick.bind(this)
        console.log('constructor')
    }

    // 组件即将挂在到页面的时刻执行 挂载只执行一次，第一进页面后执行一次
    componentWillMount() {
        console.log('componentWillMount')
    }

    // 组件挂在到页面后执行
    componentDidMount() {

        console.log('componentDidMount')
    }

    // 组件更新之前执行 必须返回boolean值，true是更新组件，FALSE是不更新组件（程序不往下走）
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        // if (nextProps.content !== this.props.content) {
        //     return true
        // }
        return true
    }

    // 组件更新之前执行 但是在shouldComponentUpdate之后执行
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    // 组件更新之后执行 也就是render之后
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    // 一个组件从父组件接受参数
    // 只要父组件的render函数被重新执行了，这个函数就会执行
    // 此组件必须是之前在父组件中存在过
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleClick() {
        const {deleteItem, index} = this.props
        deleteItem(index)
    }

    render() {
        // console.log('son')
        console.log('render')
        const {content} = this.props
        return (<li
            onClick={this.handleClick}
            dangerouslySetInnerHTML={{__html: content + this.state.test}}>
        </li>)
    }
}

// 校验 不会阻断，但会有提示
TodoItem.propTypes = {
    // test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

// TodoItem.defaultProps = {
//     test: 'hello world'
// }

export default TodoItem