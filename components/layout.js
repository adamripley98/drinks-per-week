import Nav from "./nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className="my-10">{children}</div>
      <Footer />
    </div>
  );
}
