import { verifyIdToken } from "../../utils/auth/firebaseAdmin";

const userOnboarding = async (req, res) => {
  if (req.method === "POST") {
    const token = req.headers.authorization;
    try {
      await verifyIdToken(token);
      // TODO: upload info to db
      return res.status(200).send({ success: true });
    } catch (error) {
      return res.status(401).send("You are unauthorized");
    }
  } else {
    // TODO error handle for other routes
    return res.status(400).send("This is a post route");
  }
};

export default userOnboarding;
