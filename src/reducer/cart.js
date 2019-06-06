import actionType from '../actions/actionType'
// 定义购物车的初始值

const initCart = [{
    id: 1,
    title: '手机',
    desc: '苹果2019年新款',
    price: 9999,
    countNum: 122
}, {
    id: 2,
    title: '华为手机',
    desc: '华为2019年新款',
    price: 9999,
    countNum: 0
}]

// 创建购物车的reduce，这里将传入两个参数，一个时修改前的state，
// 一个是传入过来的actions
//根据传入的不同actionstype来确定操作

export default (state = initCart , actions) => {
    console.log(state,actions)
    switch (actions.type) {
        case actionType.CART_NUM_INCREMENT:
            return state.map(item => {
                if (actions.payload.id === item.id) {
                    item.countNum ++
                }
                return item
            })
        case actionType.CART_NUM_DECREMENT:
            return state.map(item => {
                if (actions.payload.id === item.id) {
                    item.countNum --
                }
                return item
            })
    }
    return state
}
// TODO:在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
// 这里的到处后将在本目录下的index.js进行合并