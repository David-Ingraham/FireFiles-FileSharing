import React from 'react';


function PublicFiles({ files }) {
    console.log('Rendering PublicFiles with files:', files);
    return (
      <div className='public-files-container'>
        <div className='public-files-header'>Your publicly shared files</div>
        <div className='public-files-display'>
          {files.length === 0 ? (
            <div>No files available.</div>
          ) : (
            files.map((file, index) => (
              <div key={index} className='file-entry'>
                <span className='file-name'>{file.name}</span>
                <span className='upload-date'>{file.uploadDate}</span>
                <span className='file-size'>{file.size}</span>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
  
  export default PublicFiles;
