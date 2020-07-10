import useSWR from "swr";
import Link from "next/link";
import Router from "next/router";
import { useUser } from "../utils/auth/useUser";
import LandingPage from "../components/LandingPage";
import Layout from "../components/layout";
import { firebase } from "../utils/auth/initFirebase";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin"
  }).then((res) => res.json());

const Index = () => {
  const { user, logout } = useUser();
  const { data, error } = useSWR(
    user ? ["/api/getFood", user.token] : null,
    fetcher
  );

  // User is not logged in, return landing page
  if (!user) {
    return (
      <Layout>
        <LandingPage />
      </Layout>
    );
  }

  // If user doesn't exist in db (they are a new user) or they didn't complete onboard, set values for him and push to onboard flow
  const userRef = firebase.database().ref(`/users/${user.id}`);
  userRef.once("value").then((snapshot) => {
    if (!snapshot.val() || !snapshot.val().onboardComplete) {
      userRef.set({
        email: user.email,
        onboardComplete: false
      });
      Router.push("/onboard");
    }
  });

  // return homepage for user
  return (
    <Layout>
      <div>
        <p>
          You're signed in. Email:
          {user.email}
        </p>
        <p
          style={{
            display: "inlinelock",
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer"
          }}
          onClick={() => logout()}
        >
          Log out
        </p>
      </div>
      <div>
        <Link href="/example">
          <a>Another example page</a>
        </Link>
      </div>
      {error && <div>Failed to fetch food!</div>}
      {data && (
        <div>
          Your favorite food is
          {data.food}
          .
        </div>
      )}
    </Layout>
  );
};

export default Index;
