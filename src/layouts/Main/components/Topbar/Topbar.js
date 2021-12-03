import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { logoutUser } from '../../../../store/session'

const styles = theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
});

class Topbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    }

    this.logout = this.logout.bind(this);
  }
  logout() {
    this.props.logoutUser();
  }
  render() {
    const { className, onSidebarOpen, classes, ...rest } = this.props;

    return (
      <AppBar
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Toolbar>
          <RouterLink to="/">
            <img
              alt="Logo"
              src="/images/logos/logo--white.svg"
            />
          </RouterLink>
          <div className={classes.flexGrow} />
          <Hidden mdDown>
            <IconButton color="inherit">
              <Badge
                badgeContent={this.state.notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              className={classes.signOutButton}
              color="inherit"
              onClick={this.logout}
            >
              <InputIcon />
            </IconButton>
          </Hidden>
          <Hidden lgUp>
            <IconButton
              color="inherit"
              onClick={onSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapDispatchToProps = {
  logoutUser
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Topbar));
