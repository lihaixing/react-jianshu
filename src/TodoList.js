import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './style.css'
import Test from './Test'

import axios from 'axios'

const apiUrl = 'http://yapi.demo.qunar.com/mock/20004'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['学习英文']
        }
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    handleInputChange(e) {
        const value = this.input.value
        // const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        if (!this.state.inputValue.trim()) {
            return
        }
        // 推荐写法 函数写法会依次执行，不会合并
        this.setState(() => ({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }), () => {
            // setState是异步，这是回调函数，dom已经渲染完成
            // console.log('内' + this.ul.querySelectorAll('li').length)
        })

        // this.setState((prevState) => ({ //prevState 修改之前的数据
        //     list: [...prevState.list, prevState.inputValue],
        //     inputValue: ''
        // }),() => {
        //     // setState是异步，这是回调函数，dom已经渲染完成
        //     console.log('内' + this.ul.querySelectorAll('li').length)
        // })
        // console.log('外' + this.ul.querySelectorAll('li').length)
    }

    handleItemDelete(index) {
        // immutable: state不允许我们做任何改变，会影响后面的性能优化
        // const list = [...this.state.list]
        // list.splice(index, 1)
        // this.setState({
        //     list: list
        // })

        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {list}
        })
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return <TodoItem content={item}
                             index={index}
                             key={index}
                             deleteItem={this.handleItemDelete}/>
        })
    }

    // 生命周期函数开始
    componentDidMount() {
        // ajax放在这里 虽然推介放在这儿，但本人认为放在willMount中更合适
        axios.get(apiUrl + '/api/todolist').then((res) => {
            console.log(typeof res.data)
            this.setState(() => ({
                list: res.data
            }))
        }).catch((e) => {
            alert(e)
        })
    }

    render() {
        // console.log('parent')
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputName">输入内容</label> {/*这里用不能用for, 因为jsx中for表示循环*/}
                    {/* 注释的写法 */}
                    {
                        // 用className 因为class表示的是类，有混淆
                    }
                    <input id="inputName" className="in" value={this.state.inputValue}
                           onChange={this.handleInputChange}
                           ref={(input) => {
                               this.input = input
                           }}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {
                    this.ul = ul
                }}>
                    {
                        this.getTodoItem()
                    }
                </ul>
                <Test data={'aaa'}/>
            </Fragment>
        )
    }
}

export default TodoList