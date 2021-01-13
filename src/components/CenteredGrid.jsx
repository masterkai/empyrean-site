import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 800,
    marginRight: "auto",
    marginLeft: 'auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'unset'
  },
  menuItem: {
    marginBottom: 30
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const handleEnter = () => {console.log('entered!!')}
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <MenuItem className={classes.menuItem} onMouseEnter={handleEnter}>
              <ListItemText primary="Suunto"/>
              <ListItemIcon>
                <ArrowRightIcon/>
              </ListItemIcon>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <ListItemText primary="Mio"/>
              <ListItemIcon>
                <ArrowRightIcon/>
              </ListItemIcon>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <ListItemText primary="ORO"/>
              <ListItemIcon>
                <ArrowRightIcon/>
              </ListItemIcon>
            </MenuItem>
          </Paper>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <MenuItem>
              <ListItemText primary="Sent mail"/>
            </MenuItem>
          </Paper>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <MenuItem>
              <ListItemText primary="Sent mail"/>
            </MenuItem>
          </Paper>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <MenuItem>
              <ListItemText primary="Sent mail"/>
            </MenuItem>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
