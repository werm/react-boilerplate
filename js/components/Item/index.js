import React from 'react';
import data from '../../data';

class Item extends React.Component {
  render() {
    const { category, item } = this.props.params
    const menuItem = data.lookupItem(category, item)

    return (
      <div>
        <h1>{menuItem.name}</h1>
        <p>${menuItem.price}</p>
      </div>
    )
  }
}

export default Item;
