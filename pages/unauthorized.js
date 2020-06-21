import Link from "next/link";
import Layout from "../components/layout";

const Unauthorized = () => {
  return (
    <Layout>
      <h1 className="text-3xl lg:text-4xl xl:text-5xl text-center">Uh oh...</h1>
      <p className="text-l lg:text-xl xl:text-2xl text-center mb-10">
        You are unauthorized to view this page. Please
        {" "}
        <Link href="/auth">sign in</Link>
        {' '}
        to continue.
      </p>
    </Layout>
  );
};

export default Unauthorized;
