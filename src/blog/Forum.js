import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { sections } from './sectionsArray';
import Typography from '@mui/material/Typography';
import MainFeaturedPost from './MainFeaturedPost';


const mainFeaturedPost = {
  title: 'Forum des Associations Franco-Italienne',
  image: 'https://previews.123rf.com/images/booblgum/booblgum1611/booblgum161100150/66178681-italy-skyline-with-landmarks-and-reflections-vector-illustration-business-travel-and-tourism-concept.jpg',
  imageText: 'main image description',
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function forum() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Forum des Associations Franco-Italienne" sections={sections} />
      
      <main>
      <MainFeaturedPost post={mainFeaturedPost} />
      </main>
      </Container>

      <Container sx={{ my: 4 }}>

        <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
          Forum des associations italiennes virtuel : APIRP 2020
        </Typography>
        <Typography variant="body1" paragraph>
          Le forum des associations franco-italiennes initialement prévu place Baudoyer à Paris, se déroulera cette année de façon virtuelle le 20 et 21 juin 2020. L'APIRP participera avec une intervention de Olivier Morin et Ilaria Madonna, président et vice-présidente de l'association, le samedi 20 juin de 16h30 à 16h50. Pour l'occasion Ilaria Madonna a créé un padlet pour illustrer les projets menés par l'APIRP, intitulé APIRP 2020. Vous y trouverez des renseignements sur la diffusion de l'enseignement de l'italien dans les trois académies franciliennes, des documents pour la promotion de notre belle langue, une vidéo pour présenter le bilan des activités de l'APIRP de cette année, le dossier ESABAC, le programme du concours de recrutement ainsi que des projets menés par nos adhérents. Voici le lien : {' '}
          <a href="https://padlet.com/apirpassociation/apirp2020" target="_blank" rel="noopener noreferrer">https://padlet.com/apirpassociation/apirp2020</a>.
          L'intégralité du forum sera retransmise sur la page Facebook du Forum des Associations italiennes.
        </Typography>

        <img src="medias/program1.png" alt="Programme Samedi 20" />

        <img src="medias/program2.png" alt="Programme Dimanche 21" />

      </Container>

      <Footer
        title="Association des Professeurs d'Italien de la Région Parisienne"
        description="apirp.association@gmail.com"
      />
    </ThemeProvider>
  );
}
