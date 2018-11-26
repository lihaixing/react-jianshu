import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getInitDetailAction} from './store/actionCreators'
import {withRouter} from 'react-router-dom'
import {
    DetailWrapper,
    Header,
    Content
} from './style'

class Detail extends Component {
    componentDidMount() {
        this.props.initDetail(this.props.match.params.id)
    }

    render() {
        const {detail} = this.props
        return (
            <DetailWrapper>
                <Header>{detail.get('title')}</Header>
                <Content
                    dangerouslySetInnerHTML={{__html: detail.get('content')}}>
                </Content>
            </DetailWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    detail: state.getIn(['detail', 'detail']),
})

const mapDispatchToProps = (dispatch) => ({
    initDetail(id) {
        dispatch(getInitDetailAction(id))
    }
})
// withRouter让Detail组件可以获得路由的的所有内容，否则将不能获得倒路由参数id
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))