import axios from "axios";

type SendEmailArgs = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

export const sendEmail = async (args: SendEmailArgs) => {
  try {
    const response = await axios.post(
      "https://42xrg5920e.execute-api.us-west-2.amazonaws.com/sendEmail",
      args,
      {
        method: "POST",
      }
    );

    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
