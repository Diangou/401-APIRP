import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { sections } from './sectionsArray';
import MainFeaturedPost from './MainFeaturedPost';

const mainFeaturedPost = {
  title: 'Nous Connaître',
  image: 'https://previews.123rf.com/images/booblgum/booblgum1611/booblgum161100150/66178681-italy-skyline-with-landmarks-and-reflections-vector-illustration-business-travel-and-tourism-concept.jpg',
  imageText: 'main image description',
};

const defaultTheme = createTheme();

export default function AboutUs() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Nous connaître" sections={sections} />

        <MainFeaturedPost post={mainFeaturedPost} />

        <Container sx={{ my: 4 }}>

          
        <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
            Présentation de l'APIRP: Association des Professeurs d'Italien de la Région Parisienne
          </Typography>
          <Typography variant="body1" paragraph>
            Le 9 mai 1977 était déclarée à la Préfecture de Police de Paris la création de « L'Amicale des professeurs d'italien de la région parisienne ». Rebaptisée « Association des professeurs d'italien de la région parisienne » (APIRP) en 1984, elle eut pour président(e)s successifs(ives) des professeurs de Collège et de Lycée de l’Éducation Nationale, Jean Constantin, Pierre Méthivier, Anne Mazire, Gabrielle Kerleroux, Ketty Zanforlini et depuis janvier 2017, Romina De Lucia.
          </Typography>
          <Typography variant="body1" paragraph>
            Quarante ans après sa création, sa vocation originelle (« établir et développer des liens de solidarité et d'amitié entre les italianistes de la région parisienne ») reste toujours d'actualité. Mais l'APIRP a évolué avec le temps. De nouvelles actions sont en effet apparues nécessaires : tout d'abord, la collecte d'informations fiables au sujet des implantations de postes dans les trois académies; ensuite, la mise en commun d'informations culturelles, de ressources pédagogiques, d'idées pour les cours; et enfin, l'entre-aide en cas de mutation, de fragilisation de poste, etc. Pour ce faire, l'APIRP entretient un dialogue régulier et constructif avec l'Inspection d'italien, en toute indépendance.
          </Typography>
          <Typography variant="body1" paragraph>
            L'APIRP a élaboré une plaquette de promotion de la langue italienne à destination des parents et des élèves en situation de choix, publie un bulletin par an, réunit ses adhérents en assemblée générale au début et à la fin de chaque année scolaire et a également créé un site Internet et une page Facebook.
          </Typography>
          <Typography variant="body1" paragraph>
            Elle est présente lors de manifestations culturelles italo-françaises (Forum des association italiennes du XIIIè arrondissement, Festa del libro des Blancs Manteaux, réceptions au Centre culturel et à l'Ambassade d'Italie, entre autres). Elle représente aussi tous les professeurs d'italien de l'Ile de France au Congrès annuel de la FNAI (Fédération Nationale des Associations d'Italianistes).
          </Typography>
          <Typography variant="body1" paragraph>
            Pour nous contacter : apirp.association@gmail.com
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
            Membres du C.A. et du Bureau élus le 16 mars 2019
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Président :</strong> Olivier Morin
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Vice-Présidente :</strong> Ilaria Madonna
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Secrétaire :</strong> Estelle Paint
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Trésorière :</strong> Valérie Guillouet
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Correspondante APIRP pour l'académie de Paris :</strong> Alexandra Martinez
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Correspondant APIRP pour l'académie de Créteil :</strong> Graziano Tassi
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Correspondante APIRP pour l'académie de Versailles :</strong> Charlotte Ostrovsky-Richard
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Secrétaire adjointe + correspondante “CPGE” :</strong> Gabrielle Kerleroux
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Trésorière adjointe :</strong> Patrizia Bisson
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Webmestre :</strong> Maria Letizia Gabanini
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Contacts avec les associations italiennes de l'Île-de-France :</strong> Patrizia Bisson et Alexandra Martinez
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Contact avec les Universités :</strong> Graziano Tassi
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Contact avec l'IIC et le Consulat :</strong> Olivier Morin - Ilaria Madonna
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Redactrice en chef du Bulletin :</strong> Charlotte Ostrovsky-Richard
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Directeur artistique du Bulletin :</strong> Francesco Forlani
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: '#006400' }}>
            Présidents Honoraires :
          </Typography>
          <Typography variant="body1" paragraph>
            Madame Anne Mazire
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: '#006400' }}>
            Membre honoraire :
          </Typography>
          <Typography variant="body1" paragraph>
            Ketty Zanforlini
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ color: '#006400' }}>
            STATUTS VOTES EN ASSEMBLÉE GÉNÉRALE EXTRAORDINAIRE DU 9 MAI 2007 ET MODIFIÉS LE 24 JANVIER 2014
          </Typography>

          <Typography variant="body1" paragraph>
            Art .1 DÉNOMINATION
          </Typography>
          <Typography variant="body1" paragraph>
            Il est fondé entre les adhérents aux présents statuts une association régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, sous la dénomination de « Association des Professeurs d’Italien de la Région Parisienne » dite, en abrégé, « A.P.I.R.P. »
          </Typography>
          <Typography variant="body1" paragraph>
            Art.2 OBJET
          </Typography>
          <Typography variant="body1" paragraph>
            Cette association a pour objet d’établir et de développer des liens de solidarité et d’amitié entre les italianistes de la région parisienne, et de leur permettre, au cours de réunions périodiques, d’examiner les problèmes spécifiques à leur discipline .
          </Typography>
          <Typography variant="body1" paragraph>
            Peuvent faire partie de l’Association tous les professeurs d’italien de la région parisienne en activité ou à la retraite, quel que soit l’ordre d’enseignement auquel ils appartiennent. Le bureau se réserve le droit d’examiner la candidature de toute autre personne désireuse d’adhérer à l’Association.
          </Typography>
          <Typography variant="body1" paragraph>
            Art.3. SIÈGE SOCIAL
          </Typography>
          <Typography variant="body1" paragraph>
            Le siège social de l’association est fixé à PARIS (75). Le siège social sera transféré par simple décision du bureau.
          </Typography>
          <Typography variant="body1" paragraph>
            Art.4. COMPOSITION
          </Typography>
          <Typography variant="body1" paragraph>
            L’association se compose :
            <ul>
              <li>de membres d’honneur. Ce titre honorifique peut être conféré par le Conseil d’Administration aux personnes n’ayant pas adhéré à l’association, qui ont rendu ou rendent des services notables à celle-ci. Ils peuvent assister aux assemblées générales avec voix consultative. Ils ne sont ni électeurs, ni éligibles.</li>
              <li>de membres honoraires. Ce titre honorifique est conféré par le Conseil d’administration aux anciens dirigeants de l’association.</li>
              <li>de membres bienfaiteurs. Ce sont les personnes, physiques ou morales, qui ont apporté une contribution financière importante à l’Association. Ils participent aux assemblées générales avec voix consultatives.</li>
              <li>de membres actifs. Ils participent aux activités de l’Association et versent annuellement une cotisation dont le montant est fixé chaque année par le Conseil d’administration. Ils participent aux assemblées générales avec voix délibérative.</li>
            </ul>
          </Typography>
          {/* ... (le reste de votre contenu) ... */}
        </Container>

        <Footer
          title="Association des Professeurs d'Italien de la Région Parisienne"
          description="apirp.association@gmail.com"
        />
      </Container>
    </ThemeProvider>
  );
}
