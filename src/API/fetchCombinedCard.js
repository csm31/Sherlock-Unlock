import { baseURL, endPointDay } from "../common/constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchCombinedCard = async (id,endPoint) => {
  try {
    const response = await fetch(`${baseURL}${endPoint}/${id}`);
    if (response.ok) {
      const responseJSON = await response.json();
      toast.success("Right combination. Find a new card in your inventory.");
      return responseJSON;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    toast.error("Wrong combination. Try again!");
    throw Error(error);
  }
};

export default fetchCombinedCard;
