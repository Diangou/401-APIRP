import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { sections } from './sectionsArray';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MainFeaturedPost from './MainFeaturedPost';

const mainFeaturedPost = {
  title: 'Adhérer',
  image: 'https://previews.123rf.com/images/booblgum/booblgum1611/booblgum161100150/66178681-italy-skyline-with-landmarks-and-reflections-vector-illustration-business-travel-and-tourism-concept.jpg',
  imageText: 'main image description',
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function adherer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Adhérer" sections={sections} />
        <MainFeaturedPost post={mainFeaturedPost} />
      </Container>

      <Container sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
          Pourquoi adhérer?
        </Typography>

        <Typography variant="body1" paragraph sx={{ marginBottom: '50px' }}>
          Pour :
          <ul>
            <li>Participer activement aux assemblées générales.</li>
            <li>Recevoir chaque année le bulletin imprimé de l’association et les plaquettes gratuites pour la promotion de l’italien.</li>
            <li>Soutenir des initiatives pour la promotion de l’enseignement de l’italien en île-de-France :
              <ul>
                <li>La réalisation de ce site, conçu comme un outil de partage et de renseignement pour tous les professeurs d’italien de l’île-de-France.</li>
                <li>La réalisation et l’impression de plaquettes pour la promotion de l’italien.</li>
                <li>Notre présence lors des manifestations et des évènements culturels (tels que La festa del libro e della cultura italiana ou le Forum des associations franco-italiennes, etc).</li>
              </ul>
            </li>
            <li>Connaître le réseaux des professeurs d’italien de la Région Parisienne.</li>
            <li>Pouvoir être représenté et soutenu, en toutes circonstances et auprès des instances officielles, par une association reconnue.</li>
            <li>L’union faisant la force, l’A.P.I.R.P. est un moyen pour ne pas rester isolé et avoir des échanges actifs sur notre métier.</li>
          </ul>
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}> 
          Qui peut adhérer?
        </Typography>

        <Typography variant="body1" paragraph >
          Peuvent faire partie de l’Association tous les professeurs d’italien de la région parisienne en activité ou à la retraite, quel que soit l’ordre d’enseignement auquel ils appartiennent.
        </Typography>
        <Typography variant="body1" paragraph >
          Comment adhérer
        </Typography>
        <Typography variant="body1" paragraph>
          Pour devenir membres il faut : remplir une fiche d’inscription ET verser annuellement une cotisation, dont le montant est fixé chaque année par le Conseil d’administration.
        </Typography>

        <Button 
            variant="contained" 
            color="primary" 
            sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
            href="https://drive.google.com/file/d/1mPPoxuGEfqQwXtS9STAszxczkeL-Vd_6/view" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Télécharger la fiche d'adhésion
          </Button>



      </Container>

      <Footer
        title="Association des Professeurs d'Italien de la Région Parisienne"
        description="apirp.association@gmail.com"
      />
    </ThemeProvider>
  );
}
