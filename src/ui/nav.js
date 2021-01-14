import React, {useState} from 'react';
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
import MegaMenu from '../components/MegaMenu'
import Button from "@material-ui/core/Button";

const TabsArr = [
  {
    tag: '品牌代理', menu: [{
      item: 'Suunto', sub: [
        {
          item: '產品介紹', sub: [
            {item: '戶外探索與冒險',sub:[
                {item: '登山'},
                {item: '攀岩'},
                {item: '健行'},
                {item: '徒步登山越野'},
              ]},
            {item: '運動休閒與健走'},
            {item: '運動鍛鍊與訓練'},
            {item: '體適能與健身'},
            {item: '都會生活與健康'},
            {item: '所有運動'},
            {item: '配件'},
          ]
        },
        {item: '品牌故事'},
        {item: '使用小技巧'},
        {item: '名人榜'},
        {item: '冒險故事'},
        {item: '運動知識'},
      ]
    }, {item: 'Mio'}, {item: 'ORO'}]
  },
  {tag: '支援服務',menu:[
    {item: '會員中心'},
    {item: '產品註冊'},
    {item: '常見問題'},
    {item: '產品支援',sub:[
      {item:'Suunto'},
      {item:'Mio'},
      {item:'ORO'},
      ]},
    {item: '維修申請'},
    ]},
  {tag: '何處購買', menu:[
      {item:'一般通路'},
      {item:'網際通路'},
    ]},
  {tag: '愛克賽事', link: 'https://exercise.empyrean.tw/Exercise_User/'},
  {tag: '5hm1購物中心', link: 'https://www.5hm1.com.tw/'}
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
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link href='/'>
            <img className={classes.logo} src={logo} alt=""/>
          </Link>
          <div className={classes.flexGroup}>
              <MegaMenu label={TabsArr[0].tag}/>
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
      {/*<div className={classes.offsetHeight}/>*/}
    </>
  );
}
