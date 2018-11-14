import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import {connect} from 'react-redux'
import {getInputChangedAtion, getAddListAtion, getDeleteItemAtion, getInitListAction} from './store/actionCreators'


// 成了UI组件
class TodoList extends Component {

    // 生命周期函数开始
    componentDidMount() {
        this.props.initList()
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputName">输入内容</label>
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
        initList() {
            const action = getInitListAction()
            dispatch(action)
        }
    }
}
// connect执行后返回的结果是容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)