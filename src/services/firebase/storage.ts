import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { firebaseApp } from './app';

const firebaseStorage = getStorage(firebaseApp);

function uploadFile(filename: string, file: File) {
  const storageRef = ref(firebaseStorage, filename);
  return uploadBytes(storageRef, file);
}

function getFile(filename: string) {
  const starsRef = ref(firebaseStorage, filename);

  return getDownloadURL(starsRef);
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
