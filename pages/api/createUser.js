import { verifyIdToken } from "../../utils/auth/firebaseAdmin";

const createUser = async (req, res) => {
  const { token } = req.headers;
  try {
    await verifyIdToken(token);
    // TODO: upload info to db
    return res.status(200).send({ success: true });
  } catch (error) {
    return res.status(401).send("You are unauthorized");
  }
};

export default createUser;
