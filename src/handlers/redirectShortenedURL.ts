import "source-map-support/register";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const redirectURLhandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log("redirecting shortened url");

  console.log("event path: ", event.path);

  return {
    headers: {
      location: "https://facebook.com"
    },
    statusCode: 301,
    body: JSON.stringify({
      message: "Hello world!!!"
    })
  };
};
