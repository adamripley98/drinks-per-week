import { useEffect } from "react";
import Nav from "./nav";
import Footer from "./Footer";

import { useUser } from "../context/userContext";
import firebase from "../firebase/clientApp";

export default function Layout({ children }) {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser();

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      console.log(user);
    }
    // You also have your firebase app initialized
    console.log(firebase);
  }, [loadingUser, user]);

  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
