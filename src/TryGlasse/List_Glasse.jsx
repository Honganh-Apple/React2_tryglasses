import React, { Component } from 'react'
import Item_Glasse from './Item_Glasse'

export default class List_Glasse extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          {this.props.data.map((item) => {
            return <Item_Glasse detail={item} />
          })}
        </div>
      </div>
    )
  }
}
