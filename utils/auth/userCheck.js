import { firebase } from "./initFirebase";

const userCheck = (token) => {
  console.log("fb auth", firebase.auth());
  const userId = firebase.auth().currentUser.uid;
  console.log("token", token);
  console.log("currentUser id", userId);
  return token === userId;
};

export default userCheck;
