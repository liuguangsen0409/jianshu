import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'

class Detail extends Component {
  componentDidMount () {
    this.props.getDetail()
  }

  render () {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{ title }</Header>
        {/* 防止被转义 content 的内容应该这么取 */}
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
})

const mapDispatch = (dispatch) => ({
  getDetail () {
    dispatch(actionCreators.getDetail())
  }
})

export default connect(mapState, mapDispatch)(Detail)