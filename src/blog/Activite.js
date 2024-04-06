import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Ajout de l'importation de Grid
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { sections } from './sectionsArray';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Activite() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Activités Culturelles" sections={sections} />
        
        <main>
          <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
              Concours Dante Dì
            </Typography>
            <Grid container spacing={3} alignItems="center"> {/* Utilisation de Grid */}
              <Grid item xs={12} sm={6}>
                <img src="https://lh3.googleusercontent.com/EicPrt8jtCA3bWfTLpVjvB5l7LJ7rCW_V-fR-adNHX-d1L3WWDAzGFdrfSLpSNSn6-xIv-bCNIhhMSHN2sNMrfHY22m7RyN0I33R87lWxkyzQDsymKHZigJYGYdp64ciYA=w1280" alt="Dante" style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" gutterBottom>
                  Le Consulat Général d’Italie à Paris, en collaboration avec l’Institut Culturel Italien de Paris, lance le concours DANTE DÌ à l’occasion du Septième Centenaire de la mort de Dante, organisé par la Société Dante Alighieri - Comites.
                  <br />
                  Le concours est ouvert aux élèves italianistes des écoles, collèges et lycées des académies de Paris, Versailles, Créteil, Amiens, Lille, Orléans-Tours, Normandie. Les participants devront élaborer une production en italien sur le thème « Etoiles et planètes chez Dante » : une vidéo, un audio ou encore un récit ou essai illustré.
                  <br />
                  Les établissements scolaires sont invités à participer nombreux. Ils devront déposer leur dossier d’inscription par mail avant le 21 mars 2021.
                  <br />
                  Les élèves et l’enseignant vainqueurs du premier prix gagneront un voyage à Ravenna, avec accès gratuit au musée Dante et participation comme lecteurs à l’initiative "L’ora che volge il disio", lecture perpétuelle de la Divina Commedia devant le Tombeau de Dante.
                  <br />
                  Vous trouverez ci joint le règlement du concours, toutes les précisions utiles pour le retour des propositions ainsi que le bulletin d’inscription.
                </Typography>
              </Grid>
            </Grid>

            <Typography variant="h4" gutterBottom sx={{ color: '#006400', mt: 4 }}>
              In Maggiore: Paolo Fresu et Daniele di Bonaventura en concert à l’IIC Paris
            </Typography>
            <Grid container spacing={3} alignItems="center"> {/* Utilisation de Grid */}
              <Grid item xs={12} sm={6}>
                <img src="https://lh4.googleusercontent.com/S00Uv9FcSqhWTfSrOvLBa_ApKMiYbtx-ReA5FU8W0auST9faq_E8Y6iUbYzjjN8UGrzxGg=w1280" alt="Concert" style={{ width: '50%', borderRadius: '8px', marginBottom: '20px' }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" gutterBottom>
                  Mercredi 21 Oct 2020 de 19h à 20h30, l'IIC (50, rue de Varenne) nous invite au concert de Paolo Fresu et Daniele di Bonaventura.
                  <br />
                  Paolo Fresu est l’un des plus grands trompettistes de jazz d’aujourd’hui. Le musicien sarde est célèbre dans le monde entier pour sa musique éclectique et inspirée, tel un artiste prolifique aux multiples inspirations. À l’occasion de ce concert, il sera accompagné par le bandonéoniste italien Daniele di Bonaventura dont les collaborations vont de la musique classique à la musique contemporaine, du jazz au tango, du monde du cinéma à la danse-théâtre.
                  <br />
                  Découvrez le canal YouTube de Paolo Fresu : <a href="https://www.youtube.com/c/paolofresuofficial" target="_blank" rel="noopener noreferrer">Paolo Fresu Official</a>
                </Typography>
              </Grid>
            </Grid>

            <Typography variant="h4" gutterBottom sx={{ color: '#006400', mt: 4 }}>
              Sicilia, Tunisia, ...
            </Typography>
            <Grid container spacing={3} alignItems="center"> {/* Utilisation de Grid */}
              <Grid item xs={12} sm={6}>
                <img src="https://lh6.googleusercontent.com/BEwDHOw7TU-f6WxphCClkOcfu9Gj-uE6ZURZ3twondqjMgM8UTT2dMmYBIQ0KAW8fdjnXg=w1280" alt="Sicilia" style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" gutterBottom>
                  Sur scène à Nanterre, "Sicilia". Ce spectacle a été joué plus de 140 fois, traduit en italien et anglais, et joué en France et à l'étranger (Suède, Grande Bretagne, Italie, Etats-Unis). Cette fois le spectacle sera joué avec les autres éléments du puzzle que constitue l'histoire des migrations dans la famille de Clyde Chabot dans le cadre d'un triptyque : SICILIA, TUNISIA, CHICAGO-reconstitution. "Ses ancêtres ont quitté la Sicile à la fin du XIXè siècle, une branche pour la Tunisie, une autre pour les Etats-Unis. Toutes deux se sont perdues de vue."
                  <br />
                  Un quatrième spectacle, "Fille de militaire", est présenté dans le cadre d'une intégrale des solos et duos de Clyde Chabot en binôme avec un musicien.
                  <br />
                  Les représentations de ces 4 formes courtes auront lieu à La Ferme du bonheur, lieu insolite situé sur le campus universitaire à Nanterre le samedi 10 et dimanche 11 octobre à partir de 18h30. CHICAGO-reconstitution et Fille de militaire seront représentés jeudi 15 et vendredi 16 octobre à 20h30.
                  <br />
                  Source : <a href="https://www.italieaparis.net/actualite/news/sicilia-tunisia-l-integrale-des-solos-et-duos-de-clyde-chabot-17390/" target="_blank" rel="noopener noreferrer">Italie à Paris</a>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
