import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Link from '../../src/Link'
import NestedMenuItem from "material-ui-nested-menu-item";
import {MenuItem} from "@material-ui/core";


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
  },
});

const CustomizedMenu = (props) => {
  const classes = useStyles()
  const {label, link, menu} = props
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    // console.log('currect target', event.currentTarget);
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

        <div className="menuContainer">
          <div className='menuList'>
            <div className='menuItem'>
              <Link href='/about' onClick={handleClose}>
                hello
              </Link>
            </div>
          </div>
          <div className='menuList'>
            <div className='menuItem'>
              <Link href='/about' onClick={handleClose}>
                hello
              </Link>
            </div>
          </div>
          <div className='menuList'>
            <div className='menuItem'>
              <Link href='/about' onClick={handleClose}>
                hello
              </Link>
            </div>
          </div>
          <div className='menuList'>
            <div className='menuItem'>
              <Link href='/about' onClick={handleClose}>
                hello
              </Link>
            </div>
          </div>

        </div>
      </Menu>
    </>
  );
}

export default withStyles(styles)(CustomizedMenu);