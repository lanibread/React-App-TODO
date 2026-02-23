import React from "react"
import MenuItem from "../MenuItem"

export default class Menu extends React.Component {
render() {
    return (
      <div className="menu">
        <h1>{this.props.menuName} Menu</h1>
        <div className="menuItems">
          {this.props.menuItems.map((item) => (
            <MenuItem key={item.itemId} {...item} />
          ))}
        </div>
      </div>
      )
    }
  }