import React, { ChangeEvent, useState } from 'react';
import './App.css';
import AddButton from './components/AddButton';
import FolderTreeView from './components/FolderTreeView';
import useLocalStorage from './helpers/useLocalStorage';
import uploadImageToServer from './helpers/uploadImageToServer';

function App() {
  const [result, setResult] = useState<string | null>(null)
  // There is a limit of about 5MB for local storage. Converting a binary image to 
  // a base 64 encoded string will make it about 30% larger. 
  // So this would not work for high resolution images. 
  const [uploads, setUploads] = useLocalStorage<any>('images', {"images": []})

  const updateData = (image: string) => {
    setResult(image)
    if (image !== null) {
      setUploads({ 'images': [...uploads.images, image] })
    }
  }

  const onImageAdd = async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        uploadImageToServer(e.target.files[0],updateData)
      } else {
        console.error("No file was picked")
      }
    }

    return (
      <div className="App">
        <body className="App-header">
          <AddButton onImageAdd={onImageAdd}/>
          {result && <img src={result} width={300} alt="result from the API"/>}
          {uploads.images.length ? <FolderTreeView items={uploads.images} />: null}
        </body>
      </div>
      );
    }
    
    export default App;
    

