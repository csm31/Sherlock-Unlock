import {  baseURL } from "../common/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const postCards = async (endPoint, body) => {
  try {
    const response = await fetch(`${baseURL}${endPoint}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const responseJSON = await response.json();
      return responseJSON;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    toast.error("");
    throw Error(error);
  }
};

export default postCards