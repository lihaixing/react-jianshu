import React from 'react'
import Loadable from 'react-loadable'
// 异步组件
const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        return <div>正在加载中...</div>
    }
})

export default () => <LoadableComponent/>