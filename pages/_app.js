import UserProvider from "../context/userContext";

import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
