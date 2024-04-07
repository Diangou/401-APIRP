import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'; // Importer l'icône de la flèche
import FacebookIcon from '@mui/icons-material/Facebook'; // Importer l'icône Facebook

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Fait par CAMARA Diangou et CRISOSTOMO Jhermaine
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
          {/* Ajoutez l'icône Facebook à côté de la description */}
          <Link href="https://m.facebook.com/APIRP" target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={{ fontSize: 25, marginLeft: 10 }} />
          </Link>
        </Typography>
        {/* Ajoutez la flèche qui remonte en haut de la page */}
        <KeyboardArrowUpIcon onClick={handleScrollTop} style={{ cursor: 'pointer', fontSize: 40, marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: 10 }} />
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
