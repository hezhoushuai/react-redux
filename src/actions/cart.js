import actionType from './actionType'
// actionType 文件的作用就是当数据规模越来越大时，对所有的actiontype进行管理存放
// actions 返回的是状态，并不会对数据进行操作
// action 这里的文件将在 引入
export const increment = (id) => {
    return {
        type: actionType.CART_NUM_INCREMENT,
        payload: {
            id
        }
    }
}

export const decrement = (id) => {
    return {
        type: actionType.CART_NUM_DECREMENT,
        payload: {
            id
        }
    }
}