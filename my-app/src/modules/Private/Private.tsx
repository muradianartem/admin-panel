import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';

import Menu from './components/menu';

import styles from './Private.styles';

export interface PrivateModuleProps extends WithStyles<typeof styles>, RouteComponentProps {}

class Private extends React.Component<PrivateModuleProps> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Menu />
        <Switch>
          <Route 
            exact
            path={'/list'}
          >
            <div>list Items component</div>
          </Route>
          <Route 
            exact
            path={'/add-item'}
          >
            <div>add item component</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(Private);