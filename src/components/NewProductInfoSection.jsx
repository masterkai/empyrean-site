import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(theme=>({
  tab: {
    marginBottom:20
  }
}))
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
export default function NewProductInfoSection() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box mt={10} mb={4}>
        <Typography variant="h4" component="h1" gutterBottom align='center'>
          新品資訊
        </Typography>
      </Box>
      <Tabs
        className={classes.tab}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
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
            <Button variant="contained" color="primary" style={{'margin': '30px 0 0', 'borderRadius': '50px'}}>
              立即購買
            </Button>
          </div>
          <div className="flexContainer__half flexContainer__half--noBG">
            <div className="flexContainer__half">
              <Image src='/images/suunto/SPARTAN.png' width='250px' height='250px'/>
              <Typography variant='h5'>SPARTAN</Typography>
              <Button variant="contained" color="primary" style={{'margin': '15px 0 0', 'borderRadius': '50px'}}>
                立即購買
              </Button>
            </div>
            <div className="flexContainer__half">
              <Image src='/images/suunto/suunto3.png' width='250px' height='250px'/>
              <Typography variant='h5'>SUUNTO 3</Typography>
              <Button variant="contained" color="primary" style={{'margin': '15px 0 0', 'borderRadius': '50px'}}>
                立即購買
              </Button>
            </div>
            <div className="space"></div>
            <div className="flexContainer__half">
              <Image src='/images/suunto/suunto9baro.png' width='250px' height='250px'/>
              <Typography variant='h5'>suunto9baro</Typography>
              <Button variant="contained" color="primary" style={{'margin': '15px 0 0', 'borderRadius': '50px'}}>
                立即購買
              </Button>
            </div>
            <div className="flexContainer__half">
              <Image src='/images/suunto/suunto5.png' width='250px' height='250px'/>
              <Typography variant='h5'>SUUNTO 5</Typography>
              <Button variant="contained" color="primary" style={{'margin': '15px 0 0', 'borderRadius': '50px'}}>
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
    </>
  )
}