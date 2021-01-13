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
import CenteredGrid from "./CenteredGrid";

const useStyles = makeStyles((theme) => ({
  menu: {
    padding: '10px 30px'
  }
}));
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    maxWidth: '100%',
    left: '0 !important',
    width: '100%',
    height: 'auto',
    maxHeight: 'unset',
    padding: '30px 120px'
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus({label, link}) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  if(link) {
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
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CenteredGrid />
      </StyledMenu>
    </>
  );
}
