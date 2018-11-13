import React, {Component} from 'react'
import './antd.css'
import store from './store'
import {
    getInputChangedAtion,
    getAddListAtion,
    getDeleteItemAtion,
    getInitListAction
} from "./store/actionCreators";
import AntdUI from './AntdUI'

class Antd extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)

        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleChangeInput(e) {
        const action = getInputChangedAtion(e.target.value)
        store.dispatch(action)
    }

    handleBtnClick() {
        if (!this.state.inputValue) {
            return
        }
        const action = getAddListAtion()
        store.dispatch(action)
    }

    handleDeleteItem(index) {
        const action = getDeleteItemAtion(index)
        store.dispatch(action)
    }

    componentDidMount() {
        const action = getInitListAction()
        store.dispatch(action)
    }

    render() {
        return (
            <AntdUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleChangeInput={this.handleChangeInput}
                handleBtnClick={this.handleBtnClick}
                handleDeleteItem={this.handleDeleteItem}
            />
        )
    }
}

export default Antd