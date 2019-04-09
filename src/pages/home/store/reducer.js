import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '读书',
    imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 2,
    title: '故事',
    imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [{
    id: 1,
    title: '如何实现一个权限系统?',
    desc: '系统安全一直是在系统开发中不可规避的问题，而权限控制又跟系统安全密不可分，大到用户的访问，小到一个页面的按钮，都有可能涉及到权限的控制。而ren...',
    imgUrl: '//upload-images.jianshu.io/upload_images/7920781-164cd1c05d504660.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 2,
    title: '如何实现一个权限系统?',
    desc: '系统安全一直是在系统开发中不可规避的问题，而权限控制又跟系统安全密不可分，大到用户的访问，小到一个页面的按钮，都有可能涉及到权限的控制。而ren...',
    imgUrl: '//upload-images.jianshu.io/upload_images/7920781-164cd1c05d504660.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 3,
    title: '如何实现一个权限系统?',
    desc: '系统安全一直是在系统开发中不可规避的问题，而权限控制又跟系统安全密不可分，大到用户的访问，小到一个页面的按钮，都有可能涉及到权限的控制。而ren...',
    imgUrl: '//upload-images.jianshu.io/upload_images/7920781-164cd1c05d504660.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 4,
    title: '如何实现一个权限系统?',
    desc: '系统安全一直是在系统开发中不可规避的问题，而权限控制又跟系统安全密不可分，大到用户的访问，小到一个页面的按钮，都有可能涉及到权限的控制。而ren...',
    imgUrl: '//upload-images.jianshu.io/upload_images/7920781-164cd1c05d504660.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
  recommendList: [{
    id: 1,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  }, {
    id: 2,
    imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}