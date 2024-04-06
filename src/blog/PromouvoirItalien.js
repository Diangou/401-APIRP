import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { sections } from './sectionsArray';

const defaultTheme = createTheme();

export default function PromouvoirItalien() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Promouvoir Italien" sections={sections} />

        <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
          La plaquette éditée par l'APIRP
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          L'APIRP a édité un dépliant pour la promotion de l'apprentissage de la langue italienne dans les établissements scolaires de l'Île-de-France.
        </Typography>

        <Container sx={{ my: 4 }}>
          <img src="https://lh5.googleusercontent.com/ObzVNTz36YHOIOzyj6KrQMsrWQXUQ9171-sPH34ChnD8PKxbxMxyxWfkbXxBipsFarnhvQxQbO-JY5blqQapsw6Jl4WwduqU9CPPcjq_VJw=w1280" alt="Dépliant 1" style={{ width: '30%', marginBottom: '20px' }} />
          <img src="https://lh6.googleusercontent.com/8-L5A4Ojs9Q9y0Qa154YfqJNdmkdtah9_1nRmRF7qJvcTov_6rc3q3DJcBPeboh0JZIgoUBYsIT3S8hy5vmFEn1en_isavcM5NeWFD2u9dY=w1280" alt="Dépliant 2" style={{ width: '30%' }} />

          <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
            Pour commander les dépliants
          </Typography>
          
          <Typography variant="h6"  gutterBottom>
            Si vous êtes adhérent
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
            href="https://drive.google.com/file/d/0B34j4qalEtJsMGlEcmFFWlJmY1E/view?resourcekey=0-19mliwKeZAoPK9XBmNVPwg" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Télécharger le formulaire pour les adhérents
          </Button>

          <Typography variant="h6"  gutterBottom style={{ marginTop: '20px' }}>
            Si vous n'êtes pas adhérent
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
            href="https://drive.google.com/file/d/0B34j4qalEtJsd2xZM3dxclI2UTg/view?resourcekey=0-AK-KZe_UzMKDFomtWhSyGA" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Télécharger le formulaire pour les non-adhérents
          </Button>
          <br />

          <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
            Réponses au Quizz de la plaquette
          </Typography>
          <Typography variant="body1" paragraph>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
              href="https://drive.google.com/file/d/0B34j4qalEtJsd2psVS1tN3plaFU/view?resourcekey=0-nlUxtG1Hf7kOX6BhtZuY2w" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Télécharger le quizz
            </Button>
          </Typography>
        </Container>

        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </Container>
    </ThemeProvider>
  );
}
