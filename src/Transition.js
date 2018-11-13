import React, {Component, Fragment} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './transition.css'

class Transition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            list: []
        }
        this.toggleClass = this.toggleClass.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    toggleClass() {
        this.setState(() => ({
            show: !this.state.show
        }))
    }

    addItem() {
        this.setState((prevState) => ({
            list: [...prevState.list, 'item']
        }))
    }

    render() {
        return (
            <Fragment>
                <div className={this.state.show ? 'show' : 'hide'}>toggle</div>
                <button onClick={this.toggleClass}>toggle</button>
                <hr/>
                <CSSTransition
                    classNames="toggle2"
                    in={this.state.show}
                    timeout={300}
                    unmountOnExit
                    onEntered={(el) => {
                        el.style.color = 'blue'
                    }}
                    appear={true}
                >
                    <div>toggle2</div>
                </CSSTransition>
                <button onClick={this.toggleClass}>toggle</button>
                <TransitionGroup>
                    {
                        this.state.list.map((item) => (
                            <CSSTransition
                                classNames="toggle2"
                                in={this.state.show}
                                timeout={300}
                                unmountOnExit
                                onEntered={(el) => {
                                    el.style.color = 'blue'
                                }}
                                appear={true}
                            >
                                <div>{item}</div>
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
                <button onClick={this.addItem}>add item</button>
            </Fragment>
        )
    }
}

export default Transition