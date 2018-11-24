import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TopicWrapper, TopicItem} from '../style';

class Topic extends Component {
    render() {
        const {topicList} = this.props

        return (
            <TopicWrapper>
                {
                    topicList.toJS().map((item) => (
                        <TopicItem key={item.id}>
                            <img className="topic-pic" src={item.imgUrl} alt=""/>
                            {item.title}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => ({ // state是经过合并的，所以有一层header
    topicList: state.getIn(['home', 'topicList']),
})

export default connect(mapStateToProps, null)(Topic)