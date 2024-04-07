import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';  // Ajout de l'importation de IconButton
import Typography from '@mui/material/Typography';  // Ajout de l'importation de Typography
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { sections } from './sectionsArray';
import MainFeaturedPost from './MainFeaturedPost';

const mainFeaturedPost = {
  title: 'Contact',
  image: 'https://previews.123rf.com/images/booblgum/booblgum1611/booblgum161100150/66178681-italy-skyline-with-landmarks-and-reflections-vector-illustration-business-travel-and-tourism-concept.jpg',
  imageText: 'main image description',
}

const defaultTheme = createTheme();

export default function Contact() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Nous contacter" sections={sections} />
        <MainFeaturedPost post={mainFeaturedPost} />

        <Container sx={{ my: 4 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>

            <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
                Informations
              </Typography>
              <Typography variant="body1" paragraph>
                Pour nous signaler tout changement de coordonnées personnelles (adresse de domicile, téléphone, courriel) ou professionnelles (changement d’établissement de rattachement, de statut, etc.), merci d’envoyer un courriel à : <a href="mailto:apirp.association@gmail.com">apirp.association@gmail.com</a>.
              </Typography>
              <Typography variant="body1" paragraph>
                Pour les renouvellements d’adhésion et pour les commandes de plaquettes pour la promotion de l’italien, nos adhérents peuvent aussi se servir des formulaires publiés dans les deux dernières pages de notre bulletin annuel.
              </Typography>

              <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
                Social Media
              </Typography>
              <Grid container spacing={1}>
                <Grid item>
                  <IconButton aria-label="Facebook" href="https://m.facebook.com/APIRP" target="_blank">
                    <FacebookIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>

      </Container>
      <Footer
        title="Association des Professeurs d'Italien de la Région Parisienne"
        description="apirp.association@gmail.com"
      />
    </ThemeProvider>
  );
}
