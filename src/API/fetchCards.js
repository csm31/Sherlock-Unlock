import { baseURL, endPoint } from "../common/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchCards = async () => {
  try {
    const response = await fetch(
      `${baseURL}${endPoint}`
    );
    if (response.ok) {
      const responseJSON = await response.json();
      return responseJSON;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    toast.error("Error detected when calling the data. Please refresh.");
    throw Error(error);
  }
};

export default fetchCards
