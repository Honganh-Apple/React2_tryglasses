import React, { Component } from 'react'

export default class Item_Glasse extends Component {
  render() {
    let {name} = this.props.detail;
    let {price} = this.props.detail;
    let {url} = this.props.detail;
    let {desc} = this.props.detail;

    return (
      <div>
        <img className="card-img-top" src={url} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}</p>
            <p className="card-text">{desc}</p>
            <button className="btn btn-primary">TRy</button>
          </div>
      </div>
    )
  }
}
