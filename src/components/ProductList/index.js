import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ProduceList.css'
import { increment,decrement } from '../../actions/cart'

class ProductList extends Component {
    constructor() {
        super()
        this.state = {
            cart: []
        }
    }

    getData(state) {
        this.setState(() => {
            return {
                cart: state
            }
        })
    }
    //在这个阶段更改数据
    componentDidMount() {
        console.log(this.props)
        this.getData(this.props.cart)
    }

    render() {
        const {
            increment,
            decrement
        } = this.props
        return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>描述</th>
                    <th>价格</th>
                    <th>购买数量</th>
                </tr>
            </thead>
            <tbody>
                { 
                    this.state.cart.map(item => {
                        return (
                        <tr key={item.id}>    
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={decrement.bind(this,item.id)}>-</button>
                                <span>{item.countNum}</span>
                                <button onClick={increment.bind(this,item.id)}>+</button>
                            </td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
        )
    }
}

const mapState = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapState,{increment, decrement})(ProductList)