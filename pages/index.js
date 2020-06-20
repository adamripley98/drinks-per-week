import useSWR from "swr";
import Link from "next/link";
import { useUser } from "../utils/auth/useUser";
import LandingPage from "../components/LandingPage";
import Nav from "../components/nav";
import Footer from "../components/Footer";

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
      <>
        <Nav />
        <LandingPage />
        <Footer />
      </>
    );
  }

  return (
    <div>
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
    </div>
  );
};

export default Index;
