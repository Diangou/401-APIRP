import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { sections } from './sectionsArray';
import GridTable from './GridTable';
import MainFeaturedPost from './MainFeaturedPost';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const mainFeaturedPost = {
  title: 'Upload/Download',
  image: 'https://previews.123rf.com/images/booblgum/booblgum1611/booblgum161100150/66178681-italy-skyline-with-landmarks-and-reflections-vector-illustration-business-travel-and-tourism-concept.jpg',
  imageText: 'main image description',
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Fichier() {
  const [uploadedFiles, setUploadedFiles] = React.useState([]);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleUpload = () => {
    if (selectedFile) {
      // Ici, vous pouvez implémenter la logique pour uploader le fichier
      setUploadedFiles([...uploadedFiles, selectedFile]);
      setSelectedFile(null); // Réinitialiser le fichier sélectionné après l'upload
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Divers" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Typography variant="body1" paragraph>
            <input
              accept=".pdf,.doc,.docx"
              type="file"
              id="upload-button"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <label htmlFor="upload-button">
              <Button
                variant="contained"
                component="span"
                color="primary"
                sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
              >
                Upload File
              </Button>
            </label>
            {selectedFile && (
              <Typography variant="body1" paragraph>
                Selected file: {selectedFile.name}
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              disabled={!selectedFile}
              sx={{ backgroundColor: '#006400', '&:hover': { backgroundColor: '#004d00' } }}
            >
              Upload
            </Button>
          </Typography>
          <GridTable uploadedFiles={uploadedFiles} />
        </main>
      </Container>
      <Footer
        title="Association des Professeurs d'Italien de la Région Parisienne"
        description="apirp.association@gmail.com"
      />
    </ThemeProvider>
  );
}