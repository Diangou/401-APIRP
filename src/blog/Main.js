import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import { useEffect, useState } from 'react';
import Post1 from './blog-post.1.md';
import Post2 from './blog-post.2.md';
import Post3 from './blog-post.3.md';

export default function ComposantHome(props) {
  const [postContents, setPostContents] = useState([]);

  useEffect(() => {
    Promise.all([fetch(Post1)])
      .then((arrayResponse) => Promise.all(arrayResponse.map((response) => response.text())))
      .then((arrayTexts) => setPostContents(arrayTexts))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {props.title} {/* Utilisez props.title au lieu de title */}
      </Typography>
      <Divider />

      {/* Boucle sur le contenu des posts pour la création des composants Markdown */}
      {postContents.map((postContent) => (
        <Markdown className="markdown" key={postContent.substring(0, 40)}>
          {postContent}
        </Markdown>
      ))}
    </Grid>
  );
}

ComposantHome.propTypes = {
  title: PropTypes.string.isRequired, // Définissez le type et assurez-vous de le recevoir en tant que prop
};
