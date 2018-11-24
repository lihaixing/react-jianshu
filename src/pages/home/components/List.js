import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ListItem, ListInfo, LoadMore} from '../style';
import {getLoadMoreAction} from '../store/actionCreators'

class List extends Component {

    render() {
        const {list, page, loadMore} = this.props
        return (
            <div>
                {
                    list.toJS().map((item, index) => (
                        <Link key={index} to="/detail">
                            <ListItem>
                                <img className="pic" src={item.imgUrl} alt=""/>
                                <ListInfo>
                                    <h3 className="title">{item.title}</h3>
                                    <p className="desc">{item.info}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => loadMore(page)}>更多文章</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ // state是经过合并的，所以有一层header
    list: state.getIn(['home', 'list']),
    page: state.getIn(['home', 'page'])
})
const mapDispatchToProps = (dispatch) => ({
    loadMore(page) {
        dispatch(getLoadMoreAction(page))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)