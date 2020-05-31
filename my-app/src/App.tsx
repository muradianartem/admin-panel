import React from 'react';
// import { Typography } from '@material-ui/core';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';

import PrivateModule from 'src/modules/Private';
import { WithStyles, withStyles } from '@material-ui/core';

import styles from './App.styles';

export interface AppProps extends WithStyles<typeof styles>, RouteComponentProps {}

class App extends React.Component<AppProps> {
  render () {
    return (
      // <Typography component="div">
        <Route 
          path="/"
          component={PrivateModule}
        />
      // </Typography>
    );
  }
}

export default withStyles(styles)(withRouter(App));
