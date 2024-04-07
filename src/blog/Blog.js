import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import {sections} from './sectionsArray';


const mainFeaturedPost = {
  title: 'APIRP',
  description:
    "Association des Professeurs d'Italien de la Région Parisienne",
  image: 'https://previews.123rf.com/images/booblgum/booblgum1611/booblgum161100150/66178681-italy-skyline-with-landmarks-and-reflections-vector-illustration-business-travel-and-tourism-concept.jpg',
  imageText: 'main image description',
};




const sidebar = {
  title: 'À La Une...',
  description:
    'N’hésitez pas à vous rendre sur la page de nos Activités culturelles afin d’être toujours au fait des prochains évènements !',
  social: [
    { name: 'Facebook', icon: FacebookIcon},
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Accueil() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Accueil" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main post={post1} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Association des Professeurs d'Italien de la Région Parisienne"
        description="apirp.association@gmail.com"
      />
    </ThemeProvider>
  );
}
