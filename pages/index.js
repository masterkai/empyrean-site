import React from 'react';
import Container from '@material-ui/core/Container';
import Carousel from "../src/components/Carousel";
import KnowledgeAndApplicationSection from "../src/components/KnowledgeAndApplicationSection";
import NewProductInfoSection from "../src/components/NewProductInfoSection";
import NewsReleaseSection from "../src/components/NewsReleaseSection";
import SubscribeNews from "../src/components/SubsCribeNews";
import Footer from "../src/components/Footer";

export default function Index() {


  return (
    <>
      <Carousel/>
      <Container maxWidth="xl">

        <KnowledgeAndApplicationSection/>

        <NewProductInfoSection/>

        <NewsReleaseSection/>

        <SubscribeNews/>

      </Container>
      <Footer/>
    </>

  );
}
