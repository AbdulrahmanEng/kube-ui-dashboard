import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ComputerIcon from '@material-ui/icons/Computer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Chart from './Chart';
import Table from './Table';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    paddingTop: '1rem'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  paper: {
    height: 400,
    textAlign: 'center',

    width: 400,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function DashboardDrawer({cpu, memory}) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Machines
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Machines'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><ComputerIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            
        <Grid container justify="center" spacing={2}>
            <Grid item  xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
              <Chart data={cpu} title="CPU usage" />
              </Paper>
            </Grid>
            <Grid item>
            <Paper className={classes.paper}>
            <Chart data={memory} title="Memory usage" />
            </Paper>
            </Grid>
            <Grid item>
            <Table data={{cpu, memory}} />
            </Grid>
          </Grid>
      </main>
    </div>
  );
}
