// Homepage.jsx
import React, { useState, useEffect } from 'react';
import PublicFiles from './PublicFiles';
import '../style.css';
import { Button } from '@material-tailwind/react';
import { storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function Homepage() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log('File selected:', e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    try {
      const fileRef = ref(storage, `publicFiles/${file.name}`);
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);

      const fileData = {
        name: file.name,
        url: downloadURL,
        size: file.size,
        uploadDate: new Date().toLocaleDateString(),
      };

      await addDoc(collection(db, 'publicFiles'), fileData);

      setFiles(prevFiles => [...prevFiles, fileData]);
      console.log('File uploaded and data saved:', fileData);
      alert('File uploaded successfully!');
      setFile(null);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert(`Error uploading file: ${error.message}`);
    }
  };

  const fetchFiles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'publicFiles'));
      const filesList = querySnapshot.docs.map(doc => doc.data());
      setFiles(filesList);
      console.log('Fetched files:', filesList);
    } catch (error) {
      console.error('Error fetching files: ', error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className='homepage-container'>
      <div className='action-button-group'>
        
        <Button
          className='upload-button'
          color='red'
          buttonType='filled'
          size='lg'
          block={true}
          ripple='light'
          onClick={handleUpload}
        >
          <input type='file' onChange={handleFileChange} />
        </Button>
        <Button
          className='send-file-button'
          color='red'
          buttonType='filled'
          size='lg'
          block={true}
          ripple='light'
        >
          Send file to another user
        </Button>
      </div>
      <div className='public-files'>
        <PublicFiles files={files} />
      </div>
      <div className='shared-files-header'>
        shared files
        <div className='direct-shared-files'></div>
      </div>
    </div>
  );
}

export default Homepage;
