import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

export const register = async (name: string, email:string, password:string) => {
  try {
    const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;

    if (user !== null) {
      await updateProfile(user, { displayName: name });
    }

    return user;
  } catch (error) {
    console.error("Registration Error:", error);
  }
};

export const login = async (email:string, password:string) => {
  try {
    const { user: { uid } } = await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;

    return user;
  } catch (error) {
    console.error("Login Error:", error);
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Logout Error:", error);
  }
};