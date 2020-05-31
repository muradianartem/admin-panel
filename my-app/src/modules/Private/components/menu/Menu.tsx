import React from "react";
import { Link } from "react-router-dom";
import { withStyles, WithStyles } from "@material-ui/core";

import styles from './Menu.styles';

export interface MenuProps extends WithStyles<typeof styles> {}

class Menu extends React.Component<MenuProps> {
  render() {
    return(
      <div>
        <ul>
          <li>
            <Link to='list'>List</Link>
          </li>
          <li>
            <Link to='add-item'>Add Item</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Menu);