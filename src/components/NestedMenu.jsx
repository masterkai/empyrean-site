import React, {useState, useRef} from "react";
import {Menu, MenuItem, Typography, Button} from "@material-ui/core";

import NestedMenuItem from "material-ui-nested-menu-item";
import {makeStyles, withStyles} from "@material-ui/core/styles";


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={2}
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

const useStyles = makeStyles((theme) => ({
  mainNav: {
    padding: '10px 30px',
  },
  menuItem: {

    padding:'20px 60px',
    fontSize: '1rem',
    letterSpacing:2
  }
}));
export default function NestedMenu({label, link, menu}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuRef = useRef()
  const classes = useStyles()
  const [menuPosition, setMenuPosition] = useState(null);

  const handleClick = (event) => {
    if (anchorEl) {
      return;
    }
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    // if (menuPosition) {
    //   return;
    // }
    // event.preventDefault();
    // setMenuPosition({
    //   top: menuRef.current.getBoundingClientRect().bottom,
    //   left: menuRef.current.getBoundingClientRect().left
    // });
  };

  const handleItemClick = (event) => {
    // setMenuPosition(null);
    setAnchorEl(null);
    console.log(menuRef.current.getBoundingClientRect());
  };

  const handleClose = () => {
    setAnchorEl(null);
  }
  if (link) {
    return (
      <Button
        color='inherit'
        target="_blank"
        className={classes.mainNav}
        href={link}
      >
        {label}
      </Button>
    )
  }

  const renderMenu = arr => {
    return arr.map(x => x.sub ? (
      <NestedMenuItem
        ref = {menuRef}
        className={classes.menuItem}
        key={x.item}
        label={x.item}
        parentMenuOpen={Boolean(anchorEl)}
        onClick={handleItemClick}
      >
        {renderMenu(x.sub)}
      </NestedMenuItem>
    ) : (<MenuItem className={classes.menuItem} key={x.item} onClick={handleItemClick}>{x.item}</MenuItem>))
  }

  return (
    <>
      <Button
        ref={menuRef}
        className={classes.mainNav}
        onClick={handleClick}
      >
        {label}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menu&&renderMenu(menu)}
      </StyledMenu>
      {/*<Menu*/}
      {/*  className={classes.menu}*/}
      {/*  open={!!menuPosition}*/}
      {/*  onClose={() => setMenuPosition(null)}*/}
      {/*  anchorReference="anchorPosition"*/}
      {/*  anchorPosition={menuPosition}*/}
      {/*>*/}
      {/*  {menu&&renderMenu(menu)}*/}
      {/*</Menu>*/}
    </>
  );
}