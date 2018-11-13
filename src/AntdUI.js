// 拆分出的UI组件只负责渲染，不负责逻辑
import React from 'react'
import {Input, Button, List} from 'antd'
// 不需要状态、只有render的组件是无状态组件，可用函数表示
// 无状态组件没有生命周期函数，性能更高
const AntdUI = (props) => (
    <div style={{margin: '10px'}}>
        <Input placeholder="请输入内容"
               value={props.inputValue}
               style={{width: '75%', marginRight: '5%'}}
               onChange={props.handleChangeInput}
        />
        <Button type="primary" onClick={props.handleBtnClick} style={{width: '20%'}}>submit</Button>
        <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (<List.Item onClick={() => { // index 有些问题
                props.handleDeleteItem(index)
            }}>{item}</List.Item>)}
            style={{marginTop: 10}}
        />
    </div>
)

export default AntdUI

// export default class AntdUI extends Component {
//     render() {
//         return <div style={{margin: '10px'}}>
//             <Input placeholder="请输入内容"
//                    value={this.props.inputValue}
//                    style={{width: '75%', marginRight: '5%'}}
//                    onChange={this.props.handleChangeInput}
//             />
//             <Button type="primary" onClick={this.props.handleBtnClick} style={{width: '20%'}}>submit</Button>
//             <List
//                 // header={<div>Header</div>}
//                 // footer={<div>Footer</div>}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item, index) => (<List.Item onClick={() => { // index 有些问题
//                     this.props.handleDeleteItem(index)
//                 }}>{item}</List.Item>)}
//                 style={{marginTop: 10}}
//             />
//         </div>
//     }
// }