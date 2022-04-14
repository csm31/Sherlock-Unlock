import { baseURL} from "../common/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const patchCard = async (id, endPoint) => {
  try {
    const response = await fetch(`${baseURL}${endPoint}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({"revealed": true}),
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

export default patchCard