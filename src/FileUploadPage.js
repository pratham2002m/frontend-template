import React, { useState } from 'react';
import { Button, Container, Paper, Typography } from '@mui/material';
import axios from 'axios';



const FileUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleApiRequest = async () => {

    const API_ENDPOINT = 'http://127.0.0.1:8000/api/';


    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post("http://127.0.0.1:8000/api/", formData, {
                headers: {
                "Content-Type": "multipart/form-data",
                },
            });
            console.log("response = ",response.data) ;

    } else {
      console.warn('No file selected');
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: 20, marginTop: 50, width: 1100, marginLeft: 0 }}>
        <Typography variant="h5" gutterBottom>
          File Upload and API Request
        </Typography>

        <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: "30px", marginRight: "30px"}}
            component="label"
        >
            <b>Upload File</b>
            <input
            onChange={handleFileSelect}
            type="file"
            hidden
            />
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleApiRequest}
        >
          Upload and Call API
        </Button>
      </Paper>
    </Container>
  );
};

export default FileUploadPage;
