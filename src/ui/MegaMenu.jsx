import React, {useState, useRef} from "react";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import CenteredGrid from "../components/CenteredGrid";
const useStyles = makeStyles((theme) => ({
  menu: {
    padding: '10px 30px',
    position: 'relative'
  }
}));

const styles = {
  'position': 'absolute',
  'backgroundColor': '#ffffff',
  'width': '100%',
  'height': 'auto',
  'zIndex': 999,
  'top': '64px',
  'left': 0,
  'boxShadow': '0 0 3px rgba(0,0,0,0.5)'
}

export default function MegaMenu({label, link}) {
  const [menu, setMenu] = useState(false)
  const megaMenuRef = useRef()
  const classes = useStyles()
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
  const handleClick = (event) => {
    // console.log('current target', event.currentTarget)
    setMenu(pre=>!pre)
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
      {menu ? (<div style={styles}><CenteredGrid/></div>) : null}
    </>
  )
}