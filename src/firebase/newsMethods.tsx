import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const addNewToSaved: (article: Article, userId: string) => Promise<void> = async (article: Article, userId: string) => {
  try {
    const savedCollectionRef = collection(db, 'users', userId, 'saved');
    await addDoc(savedCollectionRef, article);
    console.log('Haber başarıyla kaydedildi!');
  } catch (error) {
    console.error('Haber kaydetme hatası:', error);
  }
};

export const getSavedNewsData: (userId: any) => Promise<Article[] | undefined> = async (userId) => {
    if (userId) {
      try {
        const savedDocsRef = collection(db, 'users', 'ZRhlJlxY7vVrqtQtN2LDspP2BmH2', 'saved');
        const snapshot = await getDocs(savedDocsRef);
  
        const savedDocs: Article[] = [];
        snapshot.forEach((doc) => {
          savedDocs.push(doc.data() as Article);
        });

        return savedDocs;
      } catch (error) {
        console.log(error)
      }
    }
  };
