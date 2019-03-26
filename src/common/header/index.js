import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style'

// header 变成无状态组件 性能提升比较高
const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition timeout={200} in={props.focused} classNames="slide">
            <NavSearch className={props.focused ? 'focused' : ''} onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>
          <i className="iconfont">&#xe615;</i>
          写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

// 把 store 里面的 focused 映射到 组件的 props 中
const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },

    handleInputBlur () {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
