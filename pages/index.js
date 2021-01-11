import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Carousel from "../src/components/Carousel";





export default function Index() {
  return (
    <>
      <Carousel/>
      <Container maxWidth="xl">

        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>

            Next.js example

          </Typography>

          <Copyright/>
        </Box>
      </Container>
    </>

  );
}
