import firebase from "firebase/app";
import { verifyIdToken } from "../../utils/auth/firebaseAdmin";
import userCheck from "../../utils/auth/userCheck";
import { ref } from "../../utils/auth/initFirebase";

// const userOnboarding = async (req, res) => {
//   console.log(
//     "reqbody",
//     req.body,
//     "name",
//     req.body.firstName,
//     req.body.lastName
//   );
//   console.log("what is database", database);
//   if (req.method === "POST") {
//     const token = req.headers.authorization;
//     try {
//       const userId = await verifyIdToken(token);
//       // TODO: upload info to db
//       ref(`users/${userId}`).set({
//         username: "Adum Ripley"
//       });
//       return res.status(200).send({ success: true });
//     } catch (error) {
//       console.log("error", error);
//       return res.status(401).send("You are unauthorized");
//     }
//   } else {
//     // TODO error handle for other routes
//     return res.status(400).send("You are unauthorized");
//   }
// };

const userOnboarding = async (req, res) => {
  console.log(
    "reqbody",
    req.body,
    "name",
    req.body.firstName,
    req.body.lastName
  );
  // console.log("what is database", database);
  if (req.method === "POST") {
    const token = req.headers.authorization;
    try {
      const userId = await userCheck(token);
      // TODO: upload info to db
      ref(`users/${userId}`).set({
        username: "Adum Ripley"
      });
      return res.status(200).send({ success: true });
    } catch (error) {
      console.log("error", error);
      return res.status(401).send("You are unauthorized");
    }
  } else {
    // TODO error handle for other routes
    return res.status(400).send("You are unauthorized");
  }
};

export default userOnboarding;
