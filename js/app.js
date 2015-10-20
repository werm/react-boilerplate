import React from 'react'
import { createHistory, useBasename } from 'history'
import { Router, Route, Link } from 'react-router'
import Category from './components/Category'
import CategorySidebar from './components/CategorySidebar';
import Item from './components/Item';
import data from './data'

// require('./app.css')

const history = useBasename(createHistory)({
  basename: '/sidebar'
})

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Sidebar</h1>
        <p>
          Routes can have multiple components, so that all portions of your UI
          can participate in the routing.
        </p>
      </div>
    )
  }
}

class IndexSidebar extends React.Component {
  render() {
    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {data.getAll().map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category.name}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <div className="Sidebar">
          {children ? children.sidebar : <IndexSidebar />}
        </div>
        <div className="Content">
          {children ? children.content : <Index />}
        </div>
      </div>
    )
  }
}

React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="category/:category" components={{ content: Category, sidebar: CategorySidebar }}>
        <Route path=":item" component={Item} />
      </Route>
    </Route>
  </Router>
), document.getElementById('example'))
