import React, {Component} from 'react'
import {connect} from 'react-redux'
import {RecommendWrapper, RecommendItem} from '../style';

class Recommend extends Component {
    render() {
        const {recommendList} = this.props
        return (
            <RecommendWrapper>
                {
                    recommendList.toJS().map((item) => (
                        <RecommendItem key={item.id} imgUrl={item.imgUrl}/>
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => ({ // state是经过合并的，所以有一层header
    recommendList: state.getIn(['home', 'recommendList']),
})

export default connect(mapStateToProps, null)(Recommend)