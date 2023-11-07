import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase.config";

export const addNewToSaved: (
  article: Article,
  userId: string
) => Promise<void> = async (article, userId) => {
  try {
    const savedCollectionRef = collection(db, "users", userId, "saved");
    await addDoc(savedCollectionRef, article);
    console.log("New successfully saved!");
  } catch (error) {
    console.error("Error when saving new: ", error);
  }
};

export const deleteNewFromSaved: (
  article: Article,
  userId: string
) => Promise<void> = async (article, userId) => {
  try {
    const savedCollectionRef = collection(db, "users", userId, "saved");
    const q = query(savedCollectionRef, where("title", "==", article.title));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });

    console.log("New successfully deleted!");
  } catch (error) {
    console.error("Error when deleting new: ", error);
  }
};

export const getSavedNewsData: (
  userId: any
) => Promise<Article[] | undefined> = async (userId) => {
  if (userId) {
    try {
      const savedDocsRef = collection(
        db,
        "users",
        "ZRhlJlxY7vVrqtQtN2LDspP2BmH2",
        "saved"
      );
      const snapshot = await getDocs(savedDocsRef);

      const savedDocs: Article[] = [];
      snapshot.forEach((doc) => {
        savedDocs.push(doc.data() as Article);
      });

      return savedDocs;
    } catch (error) {
      console.log(error);
    }
  }
};
