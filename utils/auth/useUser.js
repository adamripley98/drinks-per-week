import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import { firebase } from "./initFirebase";

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        cookies.remove("auth");
        router.push("/auth");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    const cookie = cookies.get("auth");
    if (!cookie) {
      // TODO push to unauthorized
      router.push("/");
      return;
    }
    setUser(JSON.parse(cookie));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, logout };
};

export { useUser };
