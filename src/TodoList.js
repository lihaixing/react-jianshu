import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import {connect} from 'react-redux'
import {getInputChangedAtion, getAddListAtion, getDeleteItemAtion, initListAction} from './store/actionCreators'

import axios from 'axios'
const apiUrl = 'http://yapi.demo.qunar.com/mock/20004'

// 成了UI组件
class TodoList extends Component {

    // 生命周期函数开始
    componentDidMount() {
        // ajax放在这里 虽然推介放在这儿，但本人认为放在willMount中更合适
        axios.get(apiUrl + '/api/todolist').then((res) => {
            this.props.initList(res.data)
        }).catch((e) => {
            alert(e)
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputName">输入内容</label> {/*这里用不能用for, 因为jsx中for表示循环*/}
                    {/* 注释的写法 */}
                    {
                        // 用className 因为class表示的是类，有混淆
                    }
                    <input id="inputName" className="in" value={this.props.inputValue}
                           onChange={this.props.handleInputChange}
                           ref={(input) => {
                               this.input = input
                           }}
                    />
                    <button onClick={this.props.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {
                    this.ul = ul
                }}>
                    {
                        this.props.list.map((item, index) => {
                            return <TodoItem content={item}
                                             index={index}
                                             key={index}
                                             deleteItem={this.props.handleItemDelete}/>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

// 连接方式 将store数据挂在props中
const mapStateToProps = (state) => ({
    inputValue: state.inputValue,
    list: state.list
})

// 将store.dispatch方法挂在props中
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = getInputChangedAtion(e.target.value)
            dispatch(action)
        },
        handleBtnClick() {
            const action = getAddListAtion()
            dispatch(action)
        },
        handleItemDelete(index) {
            const action = getDeleteItemAtion(index)
            dispatch(action)
        },
        initList(list) {
            const action = initListAction(list)
            dispatch(action)
        }
    }
}
// connect执行后返回的结果是容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)