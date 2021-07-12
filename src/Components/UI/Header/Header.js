import React from 'react';
import clsx from 'clsx';
import { Divider, Typography, List, Toolbar, AppBar, Drawer, makeStyles, useTheme } from '@material-ui/core';
import { withRouter } from 'react-router';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

// Tech Option Icons
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import LiveTvRoundedIcon from '@material-ui/icons/LiveTvRounded';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';

// Creators
import ChildCareRoundedIcon from '@material-ui/icons/ChildCareRounded';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.paper
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listItem: {
    color: 'grey'
  },
  active: {
    color: 'white',
  }
}));

const Header = ({ title, history }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const TechOptions = [
    {
      text: 'Tech Weekly',
      icon: <LiveTvRoundedIcon className={classes.listItem} />,
      activeIcon: <LiveTvRoundedIcon color='secondary' />,
      onClick: () => {
        history.push('/techweekly')
        setOpen(false)
      }
    },
    {
      text: 'Programming Rush',
      icon: <AccountTreeRoundedIcon className={classes.listItem} />,
      activeIcon: <AccountTreeRoundedIcon color='secondary' />,
      onClick: () => {
        history.push('/programmingrush')
        setOpen(false)
      }
    },
    {
      text: 'Hardware Flu',
      icon: <BuildRoundedIcon className={classes.listItem} />,
      activeIcon: <BuildRoundedIcon color='secondary' />,
      onClick: () => {
        history.push('/hardwareflu')
        setOpen(false)
      }
    },
    {
      text: 'Monthly Crackhead',
      icon: <EmojiPeopleRoundedIcon className={classes.listItem} />,
      activeIcon: <EmojiPeopleRoundedIcon color='secondary' />,
      onClick: () => {
        history.push('/monthlycrackhead')
        setOpen(false)
      }
    },
  ]

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" noWrap>
              {title}
            </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      className={classes.drawer}
        style={{width: (open ? 240 : 0)}}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon color='secondary' /> : <ChevronRightIcon color='secondary' />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key={'Home'} className={classes.listItem} onClick={() => {
              history.push('/')
              setOpen(false)
            }}>
              {title === 'Home' ? <ListItemIcon><HomeRoundedIcon color='secondary' /></ListItemIcon> : <ListItemIcon><HomeRoundedIcon className={classes.listItem} /></ListItemIcon> }
              {title === 'Home' ? <ListItemText primary={'Home'} className={classes.active} /> : <ListItemText primary={'Home'} />}
            </ListItem>
        </List>
        <Divider />
        <List className={classes.listItem}>
          {TechOptions.map(({text, icon, activeIcon, onClick}, index) => (
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon>{text === title ? activeIcon : icon}</ListItemIcon>
              {text === title ? <ListItemText primary={text} className={classes.active} /> : <ListItemText primary={text} />}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
            <ListItem button key={'Creators'} className={classes.listItem} onClick={() => {
              history.push('/creators')
              setOpen(false)
            }}>
              {title === 'Creators' ? <ListItemIcon><ChildCareRoundedIcon color='secondary' /></ListItemIcon> : <ListItemIcon><ChildCareRoundedIcon className={classes.listItem} /></ListItemIcon> }
              {title === 'Creators' ? <ListItemText primary={'Creators'} className={classes.active} /> : <ListItemText primary={'Creators'} />}
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default withRouter(Header)