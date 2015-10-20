import React from 'react';
import data from './data';

class Category extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category)

    return (
      <div>
        <h1>{category.name}</h1>
        {this.props.children || (
          <p>{category.description}</p>
        )}
      </div>
    )
  }
}

export default Category;
