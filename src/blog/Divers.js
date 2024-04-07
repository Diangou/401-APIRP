


import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import {sections} from './sectionsArray'
import GridTable from './GridTable';
import { useEffect, useState } from 'react';
import MainFeaturedPost from './MainFeaturedPost';

const mainFeaturedPost = {
  title: 'Contact',
  image: 'https://previews.123rf.com/images/booblgum/booblgum1611/booblgum161100150/66178681-italy-skyline-with-landmarks-and-reflections-vector-illustration-business-travel-and-tourism-concept.jpg',
  imageText: 'main image description',
}



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Technology() {

  const [responseMeteo, setResponseMeteo] = useState([]);


  useEffect(() => {
   
  
    const url = "https://api.open-meteo.com/v1/forecast"+
                 "?latitude=52.52&longitude=13.41&"+
                 "past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

    fetch(url).then( 
               (response) => response.json()).then( 
                           (json) => console.log(json));

  }, []);


  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
        <MainFeaturedPost post={mainFeaturedPost} />
            <p> Technology page </p>
            <GridTable results = {responseMeteo}/>
        </main>
      </Container>
      <Footer
        title="Association des Professeurs d'Italien de la Région Parisienne"
        description="apirp.association@gmail.com"
      />
    </ThemeProvider>
  );
}
