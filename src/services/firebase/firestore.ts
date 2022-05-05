import { firebaseApp } from './app';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

function newDoc(docName: string, docId: string, docObj: {}) {
  return setDoc(doc(db, docName, docId), docObj);
}

function readDoc(docName: string, docId: string) {
  const docRef = doc(db, 'cities', 'SF');
  return getDoc(docRef);
}

export const firestore = { newDoc, readDoc };
