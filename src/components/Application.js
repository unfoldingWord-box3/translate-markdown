import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ApplicationBar from './ApplicationBar';
import Workspace from './Workspace';

export const Application = ({classes}) =>
  <div className={classes.root}>
    <div className={classes.appFrame}>
      <ApplicationBar />
      <main className={classes.main}>
        <Workspace />
      </main>
    </div>
  </div>

Application.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  main: {
    padding: '5em 1em 1em 1em',
  }
});

export default withStyles(styles)(Application);