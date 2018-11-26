import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Write extends Component {

    render() {
        const {isLogin} = this.props
        return <Fragment>
            {
                isLogin ? <div style={{display: 'flex', alignItems: 'center', justContent: 'center'}}>写文章页面</div> :
                    <Redirect to="/login"/>

            }
        </Fragment>
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.getIn(['login', 'isLogin']),
})

export default connect(mapStateToProps, null)(Write)