import React, {Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super()
    this.state = { }
  }
  render () {
    return (<section id='filter'>
      <h4>Filter</h4>
      <select name="neighbourhood" className="filters neighbourhood">
        <option>Castle Downs</option>
        <option>Northgate</option>
        <option>Southgate</option>
        <option>Downtown</option>
      </select>

      <select name="house-type" className="filters house-type">
        <option>Townhouse</option>
        <option>Semi-detached</option>
        <option>Duplex</option>
        <option>Apartments </option>
      </select>

      <select name="bedrooms" className="filters bedrooms">
        <option>Castle Downs</option>
        <option>Northgate</option>
        <option>Southgate</option>
        <option>Downtown</option>
      </select>

      <div className="filters price">
        <span className="title">Price</span>
        <input type="text" name="min-price" />
        <input type="text" name="max-price" />
      </div>

      <div className="filters space">
        <span className="title">Floor Space</span>
        <input type="text" name="min-space" />
        <input type="text" name="max-space" />
      </div>

      <div className="filters price">
        <span className="title">Price</span>
        <input type="text" name="min-price" />
        <input type="text" name="max-price" />
      </div>

      <div className='filters extras'>
        <span className="title"> Extras </span>
        <label for="extras">
          Elevators 
          <input type="checkbox" value="elevators" name="extras"/>
        </label>

        <label for="extras">
          Swimming pool
          <input type="checkbox" value="swimmingPool" name="extras"/>
        </label>

        <label for="extras">
          Finished Basement
          <input type="checkbox" value="finishedBasement" name="extras"/>
        </label>

        <label for="extras">
          Gym
          <input type="checkbox" value="gym" name="extras"/>
        </label>
      </div>

    </section>);
  };
}