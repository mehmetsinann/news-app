import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase.config";
import { doc, setDoc } from "firebase/firestore";

export const register: (
  name: string,
  email: string,
  password: string
) => Promise<User | null | undefined> = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((err) => alert(err));
    const user = auth.currentUser;

    if (user !== null) {
      await updateProfile(user, { displayName: name });
    }

    return user;
  } catch (error) {
    console.error("Registration Error:", error);
  }
};

export const login: (
  email: string,
  password: string
) => Promise<User | null | undefined> = async (
  email: string,
  password: string
) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password).catch(
      (err) => alert(err)
    );
    const user = auth.currentUser;

    return user;
  } catch (error) {
    console.error("Login Error:", error);
  }
};

export const logout: () => Promise<void> = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

export const addUserToFirestore: (
  userInfo: UserState["user"]
) => Promise<void> = async (userInfo: UserState["user"]) => {
  try {
    if (userInfo?.uid === null || userInfo?.uid === undefined) {
      throw new Error("User ID is null or undefined!");
    } else {
      await setDoc(doc(db, "users", userInfo?.uid), userInfo);
    }
    console.log("User successfully added to firestore!");
  } catch (error) {
    console.error("Error when adding user to firestore:", error);
  }
};
