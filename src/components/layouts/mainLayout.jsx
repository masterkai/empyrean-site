import React from 'react';
import Header from "../ui/header";
import {Container, Typography, CssBaseline} from '@material-ui/core';

function MainLayout(props) {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Container maxWidth="xl">
        {/*<Typography component="div" style={{backgroundColor: '#cfe8fc', height: '100vh'}}/>*/}
        {props.children}
      </Container>

    </>
  );
}

export default MainLayout;