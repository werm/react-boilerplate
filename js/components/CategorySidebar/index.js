import React from 'react';
import data from '../../data';
import { Link } from 'react-router'

class CategorySidebar extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category)

    return (
      <div>
        <Link to="/">◀︎ Back</Link>
        <h2>{category.name} Items</h2>
        <ul>
          {category.items.map((item, index) => (
            <li key={index}>
              <Link to={`/category/${category.name}/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default CategorySidebar;
