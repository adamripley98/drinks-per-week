import Link from "next/link";
import { useUser } from "../utils/auth/useUser";

const ProtectedPage = ({ children }) => {
  const { user } = useUser();

  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in and authorized to view this page.
          {" "}
          <Link href="/auth">
            <a>Sign in</a>
          </Link>
        </p>
      </>
    );
  }

  return <div>{children}</div>;
};

export default ProtectedPage;
