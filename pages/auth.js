import FirebaseAuth from "../components/FirebaseAuth";
import Layout from "../components/layout";

const Auth = () => {
  return (
    <Layout>
      <div className="mt-24">
        <FirebaseAuth />
      </div>
    </Layout>
  );
};

export default Auth;
