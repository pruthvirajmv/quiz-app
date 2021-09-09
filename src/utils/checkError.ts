import axios, { AxiosError } from "axios";

export const checkError = (error: AxiosError) => {
   if (axios.isAxiosError(error)) {
      if (error && error.response) {
         console.log(error.response.data);
      }
   }
   console.error(error.message);
};
