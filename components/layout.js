import Nav from "./nav";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
