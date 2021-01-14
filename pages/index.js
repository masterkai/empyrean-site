import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import {makeStyles} from '@material-ui/core/styles';
import Copyright from '../src/Copyright';
import Carousel from "../src/components/Carousel";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import common from "@material-ui/core/colors/common";
import TabPanel from "../src/components/TabPanel";
import Image from "next/image";

const images = [
  {
    url: '/images/knowledge01.jpg',
    title: 'Breakfast01',
    width: '100%',
  },
  {
    url: '/images/knowledge02.jpg',
    title: 'Breakfast',
    width: '100%',
  },
  {
    url: '/images/knowledge03.jpg',
    title: 'Burgers',
    width: '100%',
  },
  {
    url: '/images/knowledge04.jpg',
    title: 'Camera',
    width: '100%',
  },
];

const images2 = [
  {
    url: '/images/app01.jpg',
    title: 'Breakfast01',
    width: '100%',
  },
  {
    url: '/images/app02.jpg',
    title: 'Breakfast',
    width: '100%',
  },
  {
    url: '/images/app03.jpg',
    title: 'Burgers',
    width: '100%',
  },
  {
    url: '/images/app04.jpg',
    title: 'Camera',
    width: '100%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    borderRadius: 20,
    position: 'relative',
    height: 570,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  image2: {
    borderRadius: 20,
    boxShadow: '0 0 6px rgba(0,0,0,0.5)',
    // border: 'solid 1px red',
    position: 'relative',
    height: 115,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    borderRadius: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  imageBackdrop: {
    borderRadius: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function Index() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Carousel/>
      <Container maxWidth="xl">

        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom align='center'>
            知識與應用
          </Typography>


        </Box>

        <Grid container spacing={3}>
          {images.map((image) => (
            <Grid key={image.title} item xs={3}>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width,
                }}
              >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
                <span className={classes.imageBackdrop}/>
                <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked}/>
            </Typography>
          </span>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          {images2.map((image) => (
            <Grid key={image.title} item xs={3}>
              <ButtonBase
                focusRipple
                className={classes.image2}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width,
                }}
              >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />


              </ButtonBase>
            </Grid>
          ))}
        </Grid>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom align='center'>
            新品資訊
          </Typography>
        </Box>

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Suunto" {...a11yProps(0)}/>
          <Tab label="Mio" {...a11yProps(1)}/>
          <Tab label="ORO" {...a11yProps(2)}/>
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="flexContainer">
            <div className="flexContainer__half">
              <Image src='/images/suunto/suunto7.png' width='450px' height='385px'/>
              <Typography variant='h5'>SUUNTO 7</Typography>
              <Typography variant='h5'>運動與生活完美合一</Typography>
              <Button variant="contained" color="secondary" style={{'margin':'30px 0 0','borderRadius':'50px'}}>
                立即購買
              </Button>
            </div>
            <div className="flexContainer__half flexContainer__half--noBG">
              <div className="flexContainer__half">
                <Image src='/images/suunto/SPARTAN.png' width='250px' height='250px'/>
                <Typography variant='h5'>SPARTAN</Typography>
                <Button variant="contained" color="secondary" style={{'margin':'15px 0 0','borderRadius':'50px'}}>
                  立即購買
                </Button>
              </div>
              <div className="flexContainer__half">
                <Image src='/images/suunto/suunto3.png' width='250px' height='250px'/>
                <Typography variant='h5'>SUUNTO 3</Typography>
                <Button variant="contained" color="secondary" style={{'margin':'15px 0 0','borderRadius':'50px'}}>
                  立即購買
                </Button>
              </div>
              <div className="space"></div>
              <div className="flexContainer__half">
                <Image src='/images/suunto/suunto9baro.png' width='250px' height='250px'/>
                <Typography variant='h5'>suunto9baro</Typography>
                <Button variant="contained" color="secondary" style={{'margin':'15px 0 0','borderRadius':'50px'}}>
                  立即購買
                </Button>
              </div>
              <div className="flexContainer__half">
                <Image src='/images/suunto/suunto5.png' width='250px' height='250px'/>
                <Typography variant='h5'>SUUNTO 5</Typography>
                <Button variant="contained" color="secondary" style={{'margin':'15px 0 0','borderRadius':'50px'}}>
                  立即購買
                </Button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>

        <Copyright/>
      </Container>
    </>

  );
}
