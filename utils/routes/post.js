import axios from "axios";

async function postRequest(url, data, authToken) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: authToken
  };
  try {
    const response = await axios.post(url, data, { headers });
    // TODO do something with response
    console.log("response", response);
  } catch (error) {
    // TODO handle errors
    console.log(error);
  }
}

export default postRequest;
