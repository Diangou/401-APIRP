import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { sections } from './sectionsArray';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Enseigner() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Enseigner" sections={sections} />

        <main>
          <Container>
            <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
              BAC d'Italien - Sujets juin 2018
            </Typography>

            <section>
              <Typography variant="h5" gutterBottom >
                Général LV1 et LV2 - métropole
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
                href="https://drive.google.com/file/u/0/d/14GumrwVu_b9ktTntiqf8qfzZ5IQnkNFA/view" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Voir le sujet
              </Button>
            </section>

            <section>
              <Typography variant="h5" gutterBottom >
                Technologique LV1 et LV2 - métropole
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
                href="https://drive.google.com/file/u/0/d/14GumrwVu_b9ktTntiqf8qfzZ5IQnkNFA/view" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Voir le sujet
              </Button>
            </section>

            <section>
              <Typography variant="h5" gutterBottom >
                Général LV2 - centres étrangers
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
                href="https://drive.google.com/file/u/0/d/14GumrwVu_b9ktTntiqf8qfzZ5IQnkNFA/view" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Voir le sujet
              </Button>
            </section>

            <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
              PROGRAMMES LYCÉE 2019
            </Typography>
            <p>
              Les nouveaux programmes définitifs du Lycée sont parus : 
              <a href="http://www.education.gouv.fr/pid285/bulletin_officiel.html?pid_bo=38502&utm_source=email&utm_medium=nl&utm_content=&utm_campaign=Hatier_Sco_NL_r%C3%A9formeetprogrammes2019">
                Bulletin Officiel
              </a>
            </p>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Voir le PN
            </Button>
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
