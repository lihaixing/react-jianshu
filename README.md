This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### 项目介绍
- 该项目是慕课网 < React 16.4 开发简书项目 从零基础入门到实战 > 的随堂笔记
- 主要内容:前期是基础知识和简单用法，后面则是实战，部署在不同分支上
### 运行
- npm install
- npm run start
- npm run build
- npm run eject
### 分支介绍
1. master
- 主要开发分支，包含了react基础用法、todolist、antd使用、简单动画实现、redux、redux-thunk等使用方法
2. dev-reduxSaga
- 基于master分支创建，介绍了redux-saga的使用方法，比较复杂
3. dev-reactRedux
- 也是基于master分支创建，介绍了react-redux的使用方法
4. dev-reactRedux+Thunk
- 基于reactRedux分支创建，将redux-thunk和react-redux的使用结合起来
5. dev-jianshu
- 基于dev-reactRedux+Thunk分支创建
6. dev-jianshu-immutable
- 基于dev-jianshu分支创建，简书的主要开发分支，加入了immutable数据管理
- 介绍了项目的目录结构、react-router-dom路由功能等
### 一些知识点
- Component换成PureComponent，只有本组件相关数据改变，才会重新渲染
