import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
const useStyles = makeStyles((theme) => ({
  menu: {
    padding: '10px 30px'
  },

}));

const styles = (theme) => ({
  popoverPaper: {
    maxWidth: '100%',
    left: '0 !important',
    width: '100%',
    height: 'auto',
    maxHeight: 'unset',
    padding: '30px 120px'
    // display: 'flex'
  },
});

const CustomizedMenu = (props) => {
  const classes = useStyles()
  const {label, link} = props
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log('currect target', event.currentTarget);
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  if (link) {
    return (
      <Button
        color='inherit'
        target="_blank"
        className={classes.menu}
        href={link}
      >
        {label}
      </Button>
    )
  }

  return (
    <>
      <Button
        className={classes.menu}
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {label}
      </Button>
      <Menu
        PopoverClasses={{paper: props.classes.popoverPaper}}
        anchorEl={anchorEl}
        anchorOrigin={{vertical: 'bottom',horizontal:'center'}}
        transformOrigin={{vertical: 'top',horizontal:'center'}}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        hello
      </Menu>
    </>
  );
}

export default withStyles(styles)(CustomizedMenu);