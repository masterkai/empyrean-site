import React from 'react';
import {
  InputBase,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Menu,
  MenuItem
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import {fade, makeStyles} from '@material-ui/core/styles';
import logo from '../../src/assets/Empyrean-logo.svg'
import Link from '../../src/Link'
import {UserIcon, SearchIcon} from '../icons/Icons'
import grey from "@material-ui/core/colors/grey";
import MenuListComposition from '../components/TabMenu'

const TabsArr = [
  '品牌代理',
  '支援服務',
  '何處購買',
  '愛克賽事',
  '5hm1購物中心'
]
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: 30,
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: '0',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '2'
  },
  inputRoot: {
    borderRadius: '50px',
    color: 'inherit',
    backgroundColor: grey[100]
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(.5)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flexGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  tabsBox: {
    height: '64px'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  offsetHeight: {
    height: '64px'
  }

}));

export default function SearchAppBar() {
  const classes = useStyles();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link href='/'>
            <img className={classes.logo} src={logo} alt=""/>
          </Link>
          <div>
            {TabsArr.map(tab=><MenuListComposition key={tab} label={tab}/>)}
          </div>
          <div className={classes.flexGroup}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="搜尋…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
              />
            </div>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <UserIcon/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offsetHeight} />
    </>
  );
}
