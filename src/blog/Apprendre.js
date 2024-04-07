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
  title: 'Apprendre',
  image: 'https://previews.123rf.com/images/booblgum/booblgum1611/booblgum161100150/66178681-italy-skyline-with-landmarks-and-reflections-vector-illustration-business-travel-and-tourism-concept.jpg',
  imageText: 'main image description',
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function apprendre() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Apprendre" sections={sections} />
        <MainFeaturedPost post={mainFeaturedPost} />
      </Container>

      <Container sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
          Académie de Paris - Post-Bac
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
          href="https://drive.google.com/file/d/0B34j4qalEtJsY0RZd05yNDhTUHc/view?resourcekey=0-VaGv7iLLofolzA7bj5hWaQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger la liste des établissements proposant l'Italien
        </Button>

        <Typography variant="h4" gutterBottom sx={{ color: '#006400', marginTop: '50px', marginBottom: '50px' }}>
          Académie de Paris Universités
        </Typography>

        <Typography variant="body1" paragraph >
          <Typography variant="h6" sx={{ marginBottom: '16px', textAlign: 'center' }} >Université Paris 3 Sorbonne Nouvelle</Typography>
          Site Internet : <a href="http://www.univ-paris3.fr" target="_blank">http://www.univ-paris3.fr</a>
        </Typography>

        <Typography variant="body1" paragraph>
          Cursus proposés :
          <ul>
            <li>Licence LLCER d'italien : mineure interculturelle/monodisciplinaire; mineure Communication; mineure FLES; mineure Etudes internationales; mineure anglais (ouverture en L1 à la rentrée 2015)</li>
            <li>Licences associées à une mineure d'italien :
              <ul>
                <li>Licence Sciences du Langage - mineure Langues et civilisations européennes (italien)</li>
                <li>Licence d'anglais - mineure italien</li>
              </ul>
            </li>
            <li>Master Études Italiennes (recherche)</li>
            <li>Master MEEF (Métiers de l'enseignement, de l'éducation et de la formation) parcours italien (préparation au Capes externe d'italien)</li>
            <li>Master pro Échanges culturels France-Italie (professionnel)</li>
            <li>Diplômes d'université : DLCI et DLCR (Diplôme de langue et de civilisation italienne et Diplôme de langue et de civilisation roumaine)</li>
          </ul>
        </Typography>

        <Typography variant="body1" paragraph >
          <Typography variant="h6" sx={{ marginTop: '60px', marginBottom: '16px', textAlign: 'center' }} >Université Paris IV-Sorbonne</Typography>
          Site Internet : <a href="www.paris-sorbonne.fr" target="_blank">www.paris-sorbonne.fr</a>
        </Typography>

        <Typography variant="body1" paragraph>
          Cursus proposés :
          <ul>
            <li>Deux parcours de spécialité (1. Littérature et culture ; 2. Langue et Traduction)</li>
            <li>Quatre bi-licences (Italien-Histoire ; Italien-Lettres modernes ; Italien-Lettres modernes appliquées ; Italien-Musicologie)</li>
            <li>Master recherche en Études italiennes (Littérature, Culture, Arts du spectacle et Traduction) </li>
            <li>Master recherche international en Études italiennes en co-diplomation avec l’Université La Sapienza de Rome</li>
          </ul>
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ marginTop: '60px', marginBottom: '16px', color: '#006400' }}>
          Académie de Créteil - Post-Bac
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
          href="https://drive.google.com/file/d/0B34j4qalEtJsSjVndzJXMXNEOFU/view?resourcekey=0-OFORD2PTZ1xO9LvSP_EwaA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger la liste des établissements proposant l'Italien
        </Button>

        <Typography variant="h4" gutterBottom sx={{ color: '#006400', marginTop: '50px', marginBottom: '50px' }}>
          Académie de Créteil Universités
        </Typography>

        <Typography variant="body1" paragraph >
          <Typography variant="h6" sx={{ marginTop: '60px', marginBottom: '16px', textAlign: 'center' }} >IUT</Typography>
          <Typography variant="body1" paragraph> I.U.T. de Saint Denis - Campus de La Plaine</Typography>
          Site Internet : <a href="www.iutsd.univ-paris13.fr" target="_blank">www.iutsd.univ-paris13.fr</a>
        </Typography>

        <Typography variant="body1" paragraph>
          Cursus Techniques de commercialisation
        </Typography>

        <Typography variant="body1" paragraph >
          <Typography variant="h6" sx={{ marginTop: '60px', marginBottom: '16px', textAlign: 'center' }} >Université Paris Est Créteil Val de Marne (Paris XII)</Typography>
          Site Internet : <a href="http://www.u-pec.fr/" target="_blank">http://www.u-pec.fr/</a>
        </Typography>

        <Typography variant="body1" paragraph>
          Cursus proposés :
          <ul>
            <li>Lansad (= langue pour non spécialistes)</li>
            <li>LEA : Langues Étrangères Appliquées </li>
          </ul>
        </Typography>

        <Typography variant="body1" paragraph >
          <Typography variant="h6" sx={{ marginTop: '60px', marginBottom: '16px', textAlign: 'center' }} >Université Vincennes-Saint-Denis (Paris VIII)</Typography>
          Site Internet : <a href="www.univ-paris8.fr" target="_blank">www.univ-paris8.fr</a>
        </Typography>

        <Typography variant="body1" paragraph>
          Cursus proposés :
          <ul>
            <li>UFR langues, littératures, civilisations étrangères - langues étrangères appliquées</li>
            <li>(UFR LLCE italien -LEA anglais -italien, allemand-italien, espagnol-italien)</li>
          </ul>
        </Typography>


        <Typography variant="h4" gutterBottom sx={{ marginTop: '60px', marginBottom: '16px', color: '#006400' }}>
          Académie de Versailles - Post-Bac
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
          href="https://drive.google.com/file/d/0B34j4qalEtJscV9DT1o4MDlWRkk/view?resourcekey=0-M4kcqBNpke7s59Pw2OxppQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Télécharger la liste des établissements proposant l'Italien
        </Button>

        <Typography variant="h4" gutterBottom sx={{ marginTop: '60px', marginBottom: '16px', color: '#006400' }}>
          Académie de Versailles - Universités
        </Typography>

        <Typography variant="h6" sx={{ marginTop: '60px', marginBottom: '16px', textAlign: 'center' }} >Université Paris X Nanterre</Typography>

        <Typography variant="body1" paragraph>
          Site Internet : <a href="http://www.parisnanterre.fr" target="_blank">www.parisnanterre.fr</a>
        </Typography>

        <Typography variant="body1" paragraph>
          Site du Département d'Études Italiennes : <a href="https://dep-italien.parisnanterre.fr" target="_blank">https://dep-italien.parisnanterre.fr</a>
        </Typography>

        <Typography variant="body1" paragraph>
          Cursus proposés :
          <ol>
            <li>
              LLCER (Licence mention langues, littératures et civilisations étrangères et régionales)
              <ul>
                <li>Licence en Études italiennes, avec quatre "mineures" au choix (Anglais, ou Espagnol, ou Cultures des Pays de langues européennes, ou Valorisation et développement du patrimoine touristique)</li>
                <li>Double licence (délivrance de deux diplômes français) en Études italiennes et Etudes anglo-américaines ou en Études italiennes et Géographie et aménagement (parcours franco-italien "Valorisation et développement du patrimoine touristique, en partenariat avec l’Université de Salerne)</li>
                <li>Licence en double diplôme (délivrance d'un diplôme français et d'un diplôme italien), avec l'Università per Stranieri de Sienne ou avec l'Université de Cagliari. (rentrée 2018-2019)</li>
                <li>Licence en "Études Européennes et Internationales" (LEEI). Accès sélectif sous prérequis</li>
                <li>Master Études Romanes-Italien</li>
                <li>Master Parcours International (deux ou trois langues étrangères)</li>
                <li>Master Parcours International en Double diplôme avec l'Université de Bologne</li>
              </ul>
            </li>
            <li>
              Droit
              <ul>
                <li>Licence et Master Droit français – Droit italien (possibilité d'obtenir un double diplôme, partenariat avec l'Université de Bologne)</li>
              </ul>
            </li>
            <li>
              D.U. (Diplôme d'Université) Italien: Culture et communication professionnelle (sur un semestre au choix)
            </li>
            <li>
              LEA (Langues étrangères appliquées) : Anglais-Italien
            </li>
            <li>
              Préparation au CELI (Certificat de connaissance de la langue italienne). L’examen, par convention avec l'Université de Pérouse, se passe à l'Université de Université Paris Nanterre 2 fois par an. 
            </li>
            <li>
              Doctorat en études italiennes
            </li>
          </ol>
        </Typography>

        <Typography variant="h6" sx={{ marginTop: '60px', marginBottom: '16px', textAlign: 'center' }} > Université de Versailles / Saint Quentin</Typography>

        <Typography variant="body1" paragraph>
          Site Internet : <a href="http://www.uvsq.fr/" target="_blank">http://www.uvsq.fr/</a>
        </Typography>

        <Typography variant="body1" paragraph>
          L’italien peut être choisi en 2nde ou en 3ème langue dans les cursus suivants :
          <ul>
            <li>Licence Anglais / Droit.</li>
            <li>Licence LLCE Anglais.</li>
            <li>Licence LLCE Espagnol.</li>
            <li>Licence de Lettres modernes.</li>
            <li>Licence de Géographie.</li>
          </ul>
        </Typography>



        <Typography variant="h6" sx={{ marginTop: '60px', marginBottom: '16px', textAlign: 'center' }} >  Université d’Evry Val d’Essonne</Typography>

        <Typography variant="body1" paragraph>
          Site Internet : <a href="http://www.univ-evry.fr/" target="_blank">http://www.univ-evry.fr/</a>
        </Typography>

        <Typography variant="body1" paragraph>
          L’Italien est présent dans les cursus suivants :
          <ul>
            <li>LEA : Langues étrangères appliquées (jusqu’au Master) en tant que langue complémentaire (LV3).</li>
            <li>Licence d’Histoire (en tant que LV1 ou enseignement complémentaire).</li>
          </ul>
          De plus, l’Italien existe en Unités d’Enseignement "transversales", c’est-à-dire libres. Ces UE sont proposées à tous les étudiants et en 2 niveaux : Italien LV2 débutants, Italien LV2 confirmé.
        </Typography>




      </Container>

      <Footer
        title="Association des Professeurs d'Italien de la Région Parisienne"
        description="apirp.association@gmail.com"
      />
    </ThemeProvider>
  );
}
