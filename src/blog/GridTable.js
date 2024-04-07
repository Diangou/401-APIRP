import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'name', headerName: 'File Name', width: 150 },
  { field: 'download', headerName: 'Download', width: 150, renderCell: (params) => <FileDownloadButton file={params.row.file} /> },
];

// eslint-disable-next-line
function handleUpload() {
  // Votre logique de téléchargement de fichier ici
}

function FileDownloadButton({ file }) {
  const handleDownload = () => {
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button variant="outlined" onClick={handleDownload}>
      Download
    </Button>
  );
}

function GridTable({ uploadedFiles }) {
  const rows = uploadedFiles.map((file, index) => ({
    id: index + 1,
    file,
    name: file.name // Ajout du nom du fichier dans les données de chaque ligne
  }));

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        columnVisibilityModel={{ id: false }}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}

export default GridTable;
