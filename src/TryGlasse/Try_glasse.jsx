import React, { Component } from 'react';
import List_Glasse from './List_Glasse';
import { dataGlasse } from './Data_Glass';
import './Try_glasse.module.css';

export default class Try_glasse extends Component {
    state = {
        glasseArr: dataGlasse,
    }
  render() {
    return (
      <div  className="body_image">
        <div >TRY GLASSE APP ONLINE</div>
        <div className='try_image'>
          <div className='left_image'>
            <img src="./glassesImage/model.jpg" alt="" />
          </div>
          <div className='right_image'>
            <img src="./glassesImage/model.jpg" alt="" />
          </div>

        </div>
        <List_Glasse data = {this.state.glasseArr} />
      </div>
    )
  }
}
