import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { firebaseApp } from './app';

const firebaseStorage = getStorage(firebaseApp);

function uploadFile(file: Blob | Uint8Array | ArrayBuffer) {
  const storageRef = ref(firebaseStorage, 'some-child');

  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!', snapshot);
  });
}

function getFile() {
  const starsRef = ref(firebaseStorage, 'images/stars.jpg');

  // Get the download URL
  getDownloadURL(starsRef)
    .then((url) => {
      // Insert url into an <img> tag to "download"
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
}

function deleteFile() {
  const desertRef = ref(firebaseStorage, 'images/desert.jpg');

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
    });
}

export const storage = { uploadFile, getFile, deleteFile };
